
import React from 'react';
import TableMataKuliahPage from './containers/TableMataKuliahPage'
import TableRingkasanPage from './containers/TableRingkasanPage'
import IsiIRSPage from './containers/IsiIRSPage'
import DetailIRSPage from './containers/DetailIRSPage'

const pengisianIRSRoutes = [
{ 
    path: "/irs",
    element: <TableMataKuliahPage />,
  }	
,
{ 
    path: "/irs/ringkasan",
    element: <TableRingkasanPage />,
  }	
,
{ 
    path: "/irs/tambah",
    element: <IsiIRSPage />,
  }	
,
{ 
    path: "/irs/:id",
    element: <DetailIRSPage />,
  }	

]

export default pengisianIRSRoutes
