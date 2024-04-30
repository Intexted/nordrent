"use client";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import "@/styles/Facture.css";

function Facture() {
  const router = useRouter();
  const [invoiceData, setInvoiceData] = useState();

  const SaveAsPDFHandler = () => {
    const dom = ref.current;
    try {
      toast.promise(
        toPng(dom)?.then((dataUrl) => {
          const img = new window.Image();
          img.crossOrigin = "anonymous";
          img.src = dataUrl;
          img.onload = () => {
            // Initialize the PDF.
            const pdf = new jsPDF({
              orientation: "portrait",
              unit: "cm",
              format: [21, 29.7],
              compress: true,
            });
            // Define reused data
            const imgProps = pdf.getImageProperties(img);
            const imageType = imgProps.fileType;
            const pdfWidth = pdf.internal.pageSize.getWidth();
            // Calculate the number of pages.
            const pxFullHeight = imgProps.height;
            const pxPageHeight = Math.floor((imgProps.width * 29.7) / 21);
            const nPages = Math.ceil(pxFullHeight / pxPageHeight);
            // Define pageHeight separately so it can be trimmed on the final page.
            let pageHeight = pdf.internal.pageSize.getHeight();
            // Create a one-page canvas to split up the full image.
            const pageCanvas = document.createElement("canvas");
            const pageCtx = pageCanvas.getContext("2d");
            pageCanvas.width = imgProps.width;
            pageCanvas.height = pxPageHeight;
            for (let page = 0; page < nPages; page++) {
              // Trim the final page to reduce file size.
              if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
                pageCanvas.height = pxFullHeight % pxPageHeight;
                pageHeight = (pageCanvas.height * pdfWidth) / pageCanvas.width;
              }
              // Display the page.
              const w = pageCanvas.width;
              const h = pageCanvas.height;
              pageCtx.fillStyle = "white";
              pageCtx.fillRect(0, 0, w, h);
              pageCtx.drawImage(img, 0, page * pxPageHeight, w, h, 0, 0, w, h);
              // Add the page to the PDF.
              if (page) pdf.addPage();
              const imgData = pageCanvas.toDataURL(`image/${imageType}`, 1);
              pdf.addImage(imgData, imageType, 0, 0, pdfWidth, pageHeight);
            }
            // Output / Save
            pdf.save(`facture-${invoiceData?.invoiceNumber}.pdf`);
          };
        }),
        { pending: "Create Pdf...", error: "oops, something went wrong!" }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const SaveAsPNGHandler = () => {
    const dom = ref.current;
    toast.promise(
      toPng(dom)?.then((dataUrl) => {
        var link = document.createElement("a");
        link.download = `facture-${invoiceData?.invoiceNumber}.png`;
        link.href = dataUrl;
        link.click();
      }),
      { pending: "Create PNG..", error: "oops, something went wrong!" }
    );
  };

  const ref = useRef();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("facture")) {
      setReady(true);
      setInvoiceData(JSON.parse(sessionStorage.getItem("facture")));
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {ready && (
        <div className="Facture-container">
          <div
            className="buttons"
            style={{
              margin: "40px 0  20px",
              display: "flex",
              gap: 30,
            }}
          >
            <Link href={"/"} className="cancel">
              Back
            </Link>
            <button className="download" onClick={SaveAsPDFHandler}>
              PDF
              {/* {icons.print} */}
            </button>
            <button className="download" onClick={SaveAsPNGHandler}>
              PNG
              {/* {icons.img} */}
            </button>
          </div>
          <div>
            <div className="Facture" id="Facture" ref={ref}>
              <header>
                <div id="project">
                  <div>
                    <span>Client</span>
                    {invoiceData?.customerName}
                  </div>
                  <div>
                    <span>Code</span>
                    {invoiceData?.invoiceNumber}
                  </div>
                  <div>
                    <span>Phone</span>
                    {invoiceData?.customerPhone}
                  </div>

                  <div>
                    <span>Date</span> {moment().format("DD MMMM Y")}
                  </div>
                </div>
                <div id="company">
                  <div id="logo">
                    <Image
                      width={50}
                      height={50}
                      alt="logo"
                      src={"/images/logo.svg"}
                    />
                  </div>
                </div>
              </header>
              <main>
                <div style={{ height: 40 }}></div>
                <table>
                  <thead>
                    <tr>
                      <th className="service">Véhicule</th>
                      <th className="desc">Date départ</th>
                      <th className="desc">Agence départ</th>
                      <th>Date Retour</th>
                      <th>Agence Retour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 700 }} className="service">
                        {invoiceData?.brand} {invoiceData?.vehicule}
                      </td>
                      <td className="service">
                        {moment(invoiceData?.pickUpDate).format("yyyy-MM-DD")}
                      </td>
                      <td className="service">{invoiceData?.pickUpLocation}</td>
                      <td className="service">
                        {moment(invoiceData?.pickOffDate).format("yyyy-MM-DD")}
                      </td>
                      <td className="service">
                        {invoiceData?.pickOffLocation}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style={{ margin: "10px 0" }}>
                  <thead>
                    <tr>
                      <th colSpan={2}>Temps Départ</th>
                      <th colSpan={2}>Temps Retour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="service"
                        style={{ textAlign: "center" }}
                        colSpan={2}
                      >
                        {invoiceData?.pickUpTime}
                      </td>
                      <td
                        className="service"
                        style={{ textAlign: "center" }}
                        colSpan={2}
                      >
                        {invoiceData?.pickOffTime}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        rowSpan={3}
                        colSpan={2}
                        style={{
                          background: "none",
                          borderBottom: "none",
                        }}
                      ></td>
                      <td style={{ textAlign: "left" }}>Subtotal</td>
                      <td className="total">{invoiceData?.total}</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}> Payment</td>
                      <td className="total">{invoiceData?.payment}</td>
                    </tr>
                    <tr>
                      <td className="grand total">Total</td>
                      <td className="grand total">{invoiceData?.total}</td>
                    </tr>
                  </tfoot>
                </table>

                <div id="notices">
                  <div>NOTICE:</div>
                  <div className="notice">
                    A finance charge of 1.5% will be made on unpaid balances
                    after 30 days.
                  </div>
                </div>
              </main>

              <footer>
                <div className="qr-container">
                  <QRCodeSVG
                    height={80}
                    width={80}
                    className="myQr"
                    value="https://rentnord.com/"
                    // fgColor='#1a3691'
                  />
                </div>
                <div>
                  Invoice was created on a computer and is valid without the
                  signature and seal.
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Facture;
