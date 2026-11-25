
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PersetujuanTable from "../components/PersetujuanTable";
import getListPersetujuan from '../services/getListPersetujuan'

const PersetujuanIRSPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tablePersetujuan: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Persetujuan IRS Page")
  }, []);


const [listPersetujuan, setListPersetujuan] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tablePersetujuan: true}))
				const { data: listPersetujuan } = await getListPersetujuan()
				setListPersetujuan(listPersetujuan.data)
			} finally {
				setIsLoading(prev => ({...prev, tablePersetujuan: false}))
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
	title={"Table Persetujuan"}
	singularName={"Persetujuan"}
	items={[listPersetujuan]}
	isLoading={isLoading.tablePersetujuan}
>
	<PersetujuanTable
		listPersetujuan={listPersetujuan}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PersetujuanIRSPage

