
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailKelasDiambil from '../components/DetailKelasDiambil'
import getDetailKelasDiambil from '../services/getDetailKelasDiambil'

const DetailKelasDiambilPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailKelasDiambil: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Kelas Diambil Page")
  }, []);


const [detailKelasDiambil, setDetailKelasDiambil] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailKelasDiambil: true}))
				const { data: detailKelasDiambil } = await getDetailKelasDiambil({ id })
				setDetailKelasDiambil(detailKelasDiambil.data)
			} finally {
				setIsLoading(prev => ({...prev, detailKelasDiambil: false}))
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
	title={"Detail Kelas Diambil"}
	singularName={"Kelas"}
	items={{...detailKelasDiambil}}
	isLoading={isLoading.detailKelasDiambil}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailKelasDiambil {...{ data : { ...detailKelasDiambil }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailKelasDiambilPage

