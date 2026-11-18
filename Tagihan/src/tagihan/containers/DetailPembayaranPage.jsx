
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailPembayaran from '../components/DetailPembayaran'
import getDetailPembayaran from '../services/getDetailPembayaran'

const DetailPembayaranPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailPembayaran: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Pembayaran Page")
  }, []);


const [detailPembayaran, setDetailPembayaran] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailPembayaran: true}))
				const { data: detailPembayaran } = await getDetailPembayaran({ id })
				setDetailPembayaran(detailPembayaran.data)
			} finally {
				setIsLoading(prev => ({...prev, detailPembayaran: false}))
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
<Layouts.DetailContainerLayout
	title={"Detail Pembayaran"}
	singularName={"Pembayaran"}
	items={{...detailPembayaran}}
	isLoading={isLoading.detailPembayaran}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPembayaran {...{ data : { ...detailPembayaran }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailPembayaranPage

