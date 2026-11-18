
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailIRS from '../components/DetailIRS'
import getDetailIRS from '../services/getDetailIRS'

const DetailIRSPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailIRS: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail IRS Page")
  }, []);


const [detailIRS, setDetailIRS] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailIRS: true}))
				const { data: detailIRS } = await getDetailIRS({ id })
				setDetailIRS(detailIRS.data)
			} finally {
				setIsLoading(prev => ({...prev, detailIRS: false}))
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
	title={"Detail IRS"}
	singularName={"IRS"}
	items={{...detailIRS}}
	isLoading={isLoading.detailIRS}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailIRS {...{ data : { ...detailIRS }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailIRSPage

