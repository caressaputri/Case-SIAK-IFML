
import React from 'react';
import TableKelasPage from './containers/TableKelasPage'
import TableIRSPage from './containers/TableIRSPage'
import DetailIRSPage from './containers/DetailIRSPage'
import AddIRSPage from './containers/AddIRSPage'
import EditIRSPage from './containers/EditIRSPage'
import TableKelasDiambilPage from './containers/TableKelasDiambilPage'
import AmbilKelasPage from './containers/AmbilKelasPage'
import DetailKelasDiambilPage from './containers/DetailKelasDiambilPage'

const pengisianIRSRoutes = [
{ 
    path: "/irs",
    element: <TableKelasPage />,
  }	
,
{ 
    path: "/irs/ringkasan",
    element: <TableIRSPage />,
  }	
,
{ 
    path: "/irs/tambah",
    element: <AddIRSPage />,
  }	
,
{ 
    path: "/irs/ubah",
    element: <EditIRSPage />,
  }	
,
{ 
    path: "/irs/kelas",
    element: <TableKelasDiambilPage />,
  }	
,
{ 
    path: "/irs/kelas/tambah",
    element: <AmbilKelasPage />,
  }	
,
{ 
    path: "/irs/:id",
    element: <DetailIRSPage />,
  }	
,
{ 
    path: "/irs/kelas/:id",
    element: <DetailKelasDiambilPage />,
  }	

]

export default pengisianIRSRoutes
