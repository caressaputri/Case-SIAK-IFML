
import React from 'react';
import TableTagihanPage from './containers/TableTagihanPage'
import DetailTagihanPage from './containers/DetailTagihanPage'
import AddPembayaranPage from './containers/AddPembayaranPage'
import AddTagihanPage from './containers/AddTagihanPage'
import EditTagihanPage from './containers/EditTagihanPage'
import TablePembayaranPage from './containers/TablePembayaranPage'
import DetailPembayaranPage from './containers/DetailPembayaranPage'
import EditPembayaranPage from './containers/EditPembayaranPage'

const tagihanRoutes = [
{ 
    path: "/tagihan",
    element: <TableTagihanPage />,
  }	
,
{ 
    path: "/tagihan/bayar",
    element: <AddPembayaranPage />,
  }	
,
{ 
    path: "/tagihan/tambah",
    element: <AddTagihanPage />,
  }	
,
{ 
    path: "/tagihan/ubah",
    element: <EditTagihanPage />,
  }	
,
{ 
    path: "/pembayaran",
    element: <TablePembayaranPage />,
  }	
,
{ 
    path: "/pembayaran/ubah",
    element: <EditPembayaranPage />,
  }	
,
{ 
    path: "/tagihan/:id",
    element: <DetailTagihanPage />,
  }	
,
{ 
    path: "/pembayaran/:id",
    element: <DetailPembayaranPage />,
  }	

]

export default tagihanRoutes
