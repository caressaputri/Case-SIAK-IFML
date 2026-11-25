
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailPersetujuan from '../components/DetailPersetujuan'
import getDetailPersetujuan from '../services/getDetailPersetujuan'

const DetailPersetujuanPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailPersetujuan: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Persetujuan Page")
  }, []);


const [detailPersetujuan, setDetailPersetujuan] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailPersetujuan: true}))
				const { data: detailPersetujuan } = await getDetailPersetujuan({ id })
				setDetailPersetujuan(detailPersetujuan.data)
			} finally {
				setIsLoading(prev => ({...prev, detailPersetujuan: false}))
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
	title={"Detail Persetujuan"}
	singularName={"Persetujuan"}
	items={{...detailPersetujuan}}
	isLoading={isLoading.detailPersetujuan}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPersetujuan {...{ data : { ...detailPersetujuan }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailPersetujuanPage

