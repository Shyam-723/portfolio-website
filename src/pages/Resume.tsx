import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Header from '../components/Header';
import ResumePDF from '../images/Shyam Gupta Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);


  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-[#1e1e2f] px-4 pt-5 pb-12">
      <Header />
      <div className="flex flex-col items-center justify-center mt-20 mb-10">
        <Document
            file= {ResumePDF} 
            onLoadSuccess={onDocumentLoadSuccess}
            className="shadow-lg"
            >
            <Page
                pageNumber={pageNumber}
                scale={1.5}
                renderTextLayer={false}
                renderAnnotationLayer={false}
            />
          </Document>
        <p className="mt-4 text-gray-600">
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}
