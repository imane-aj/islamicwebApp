import React, { useState } from 'react'
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import Fund from '../../assets/3Fund.pdf';

const Pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    const onDocLoadSuccess = ({numPages}) =>{
        setNumPages(numPages);
        setPageNum(1);
    }

    function changePage(offset){
        setPageNum(prevPageNumber => prevPageNumber + offset)
    }
    function pagePrev(){
        changePage(-1)
    }
    function pageNext(){
        changePage(+1)
    }
  return (
    <div>
    <header className='relative'>
        <div className='flex flex-row absolute z-10 top-10 left-14'>
        <div>
        {pageNum > 1 &&
            <button onClick={pagePrev} className='border border-custom-1 rounded-md px-5'><i class="fa-solid fa-circle-chevron-left"></i> Previous Page</button>
        }
        </div>
        <div className='mx-8'> <p className='bg-white text-custom-1'>Page {pageNum} of {numPages}</p></div>
        <div>
        {pageNum < numPages &&
            <button onClick={pageNext} className='border border-custom-1 rounded-md px-5'>Next Page <i class="fa-solid fa-circle-chevron-right"></i></button>
        }
        </div>
        
        </div>
        <Document file={Fund} onLoadSuccess={onDocLoadSuccess}>
            <Page pageNumber={pageNum}/>
        </Document>
        </header>
    </div>
  )
}

export default Pdf