
import React from 'react';
import TableMataKuliahPage from './containers/TableMataKuliahPage'
import TableRingkasanPage from './containers/TableRingkasanPage'
import IsiIRSPage from './containers/IsiIRSPage'
import DetailIRSPage from './containers/DetailIRSPage'
import PersetujuanIRSPage from './containers/PersetujuanIRSPage'
import DetailPersetujuanPage from './containers/DetailPersetujuanPage'

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
    path: "/irs/persetujuan",
    element: <PersetujuanIRSPage />,
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
,
{ 
    path: "/irs/persetujuan/:id",
    element: <DetailPersetujuanPage />,
  }	

]

export default pengisianIRSRoutes
