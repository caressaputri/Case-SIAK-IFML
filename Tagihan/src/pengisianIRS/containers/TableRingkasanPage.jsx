
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import RingkasanTable from "../components/RingkasanTable";
import getListRingkasan from '../services/getListRingkasan'

const TableRingkasanPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableRingkasan: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Ringkasan Page")
  }, []);


const [listRingkasan, setListRingkasan] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableRingkasan: true}))
				const { data: listRingkasan } = await getListRingkasan()
				setListRingkasan(listRingkasan.data)
			} finally {
				setIsLoading(prev => ({...prev, tableRingkasan: false}))
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
	title={"Table Ringkasan"}
	singularName={"Ringkasan"}
	items={[listRingkasan]}
	isLoading={isLoading.tableRingkasan}
>
	<RingkasanTable
		listRingkasan={listRingkasan}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableRingkasanPage

