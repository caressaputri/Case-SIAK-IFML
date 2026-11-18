
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MataTable from "../components/MataTable";
import getListMataKuliah from '../services/getListMataKuliah'

const TableMataKuliahPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableMataKuliah: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Mata Kuliah Page")
  }, []);


const [listMataKuliah, setListMataKuliah] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMataKuliah: true}))
				const { data: listMataKuliah } = await getListMataKuliah()
				setListMataKuliah(listMataKuliah.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMataKuliah: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Mata Kuliah"}
	singularName={"Mata"}
	items={[listMataKuliah]}
	isLoading={isLoading.tableMataKuliah}
>
	<MataTable
		listMataKuliah={listMataKuliah}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableMataKuliahPage

