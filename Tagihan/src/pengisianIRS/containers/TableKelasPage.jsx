
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import KelasTable from "../components/KelasTable";
import getListKelas from '../services/getListKelas'

const TableKelasPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableKelas: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Kelas Page")
  }, []);


const [listKelas, setListKelas] = useState()




useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableKelas: true}))
				const { data: listKelas } = await getListKelas()
				setListKelas(listKelas.data)
			} finally {
				setIsLoading(prev => ({...prev, tableKelas: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/irs/tambah
			  	`}>
			  		<Button id="yBtnIsiIRS" className="p-2" variant="primary">
			  		  Isi IRS
			  		</Button>
			  	</Link>
			  	<Link to={`/irs/ringkasan
			  	`}>
			  		<Button id="yBtnIRSSaya" className="p-2" variant="primary">
			  		  IRS Saya
			  		</Button>
			  	</Link>
			  	<Link to={`/irs/kelas
			  	`}>
			  		<Button id="yBtnKelasDiambil" className="p-2" variant="primary">
			  		  Kelas Diambil
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Kelas"}
	singularName={"Kelas"}
	items={[listKelas]}
	isLoading={isLoading.tableKelas}
>
	<KelasTable
		listKelas={listKelas}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableKelasPage

