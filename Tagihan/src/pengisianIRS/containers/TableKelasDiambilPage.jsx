
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PengambilanTable from "../components/PengambilanTable";
import getListKelasDiambil from '../services/getListKelasDiambil'

const TableKelasDiambilPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tablePengambilanKelas: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Kelas Diambil Page")
  }, []);


const [listKelasDiambil, setListKelasDiambil] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tablePengambilanKelas: true}))
				const { data: listKelasDiambil } = await getListKelasDiambil()
				setListKelasDiambil(listKelasDiambil.data)
			} finally {
				setIsLoading(prev => ({...prev, tablePengambilanKelas: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/irs/kelas/tambah
			  	`}>
			  		<Button id="yBtnAmbil" className="p-2" variant="primary">
			  		  Ambil Kelas
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Pengambilan Kelas"}
	singularName={"Pengambilan"}
	items={[listKelasDiambil]}
	isLoading={isLoading.tablePengambilanKelas}
>
	<PengambilanTable
		listKelasDiambil={listKelasDiambil}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableKelasDiambilPage

