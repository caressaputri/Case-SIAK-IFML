
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import IRSTable from "../components/IRSTable";
import getListIRS from '../services/getListIRS'

const TableIRSPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableIRS: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table IRS Page")
  }, []);


const [listIRS, setListIRS] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableIRS: true}))
				const { data: listIRS } = await getListIRS()
				setListIRS(listIRS.data)
			} finally {
				setIsLoading(prev => ({...prev, tableIRS: false}))
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
	title={"Table IRS"}
	singularName={"IRS"}
	items={[listIRS]}
	isLoading={isLoading.tableIRS}
>
	<IRSTable
		listIRS={listIRS}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableIRSPage

