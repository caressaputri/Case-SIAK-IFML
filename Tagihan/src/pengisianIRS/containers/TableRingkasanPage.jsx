
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import Card from "../components/invalidCard";
import getDataBinding from '../services/getDataBinding'

const TableRingkasanPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	list: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Ringkasan Page")
  }, []);


const [dataBinding, setDataBinding] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, list: true}))
				const { data: dataBinding } = await getDataBinding()
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, list: false}))
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
<Layouts.ListContainerCardLayout
	title={"List"}
	singularName={""}
	items={[dataBinding]}
	isLoading={isLoading.list}
>
	<Card dataBinding={dataBinding} />
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableRingkasanPage

