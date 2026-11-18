
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MataTableForm from "../components/MataTableForm";
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
	
	
	const [edited, setEdited] = useState([])

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

	useEffect(() => {
	  if (listMataKuliah) {
	    setEdited(listMataKuliah)
	  }
	}, [listMataKuliah])
	
	const handleChange = (updatedItems) => {
		setEdited(
			(prevData) =>
			prevData.map((p, idx) => ({
				...p,
				...updatedItems[idx],
			}))
		);
	};

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		isLoading={isLoading.tableMataKuliah}
	>
		<MataTableForm
			listMataKuliah={listMataKuliah}
			edited={edited}
        	handleChange={handleChange}
			isLoading={isLoading.tableMataKuliah}
			
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableMataKuliahPage

