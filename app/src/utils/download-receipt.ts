import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadReceipt = async ({
  element,
  fileName,
}: {
  element: HTMLElement | null;
  fileName: string;
}) => {
  if (!element) {
    console.error("No element provided");
    return;
  }

  const canvas = await html2canvas(element, { scale: 4 });
  const imgData = canvas.toDataURL("image/jpeg", 1);

  const pdf = new jsPDF({
    unit: "px",
    compress: true,
    format: "a4",
  });
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  const scale = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);

  const imgWidth = canvas.width * scale;
  const imgHeight = canvas.height * scale;

  pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
  pdf.save(fileName);
};
