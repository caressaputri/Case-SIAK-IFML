
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailTagihan from '../components/DetailTagihan'
import getDetailTagihan from '../services/getDetailTagihan'

const DetailTagihanPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailTagihan: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Tagihan Page")
  }, []);


const [detailTagihan, setDetailTagihan] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailTagihan: true}))
				const { data: detailTagihan } = await getDetailTagihan({ id })
				setDetailTagihan(detailTagihan.data)
			} finally {
				setIsLoading(prev => ({...prev, detailTagihan: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/tagihan/bayar
			  	`}>
			  		<Button id="_wAVHENzHEfGG8dLC5rTvHA" className="p-2 w-full" variant="primary">
			  		  Add Pembayaran
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Tagihan"}
	singularName={"Tagihan"}
	items={{...detailTagihan}}
	isLoading={isLoading.detailTagihan}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailTagihan {...{ data : { ...detailTagihan }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailTagihanPage

