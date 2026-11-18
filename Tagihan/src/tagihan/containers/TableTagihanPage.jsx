
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TagihanTable from "../components/TagihanTable";
import getListTagihan from '../services/getListTagihan'

const TableTagihanPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableTagihan: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Tagihan Page")
  }, []);


const [listTagihan, setListTagihan] = useState()



useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTagihan: true}))
				const { data: listTagihan } = await getListTagihan()
				setListTagihan(listTagihan.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTagihan: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/tagihan/tambah
			  	`}>
			  		<Button id="xEvTambahTag" className="p-2" variant="primary">
			  		  Tambah Tagihan
			  		</Button>
			  	</Link>
			  	<Link to={`/pembayaran
			  	`}>
			  		<Button id="xEvDaftarPemb" className="p-2" variant="primary">
			  		  Daftar Pembayaran
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Tagihan"}
	singularName={"Tagihan"}
	items={[listTagihan]}
	isLoading={isLoading.tableTagihan}
>
	<TagihanTable
		listTagihan={listTagihan}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableTagihanPage

