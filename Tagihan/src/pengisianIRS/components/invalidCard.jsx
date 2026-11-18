
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const invalidCard = ({ dataBinding,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataBinding]}
  	
  	itemsAttrs={[
          {
            id: "iD",
            condition: "",
            label: "ID",
            featureName: "id",
            editable: false
          }
  ,        {
            id: "status",
            condition: "",
            label: "Status",
            featureName: "status",
            editable: false
          }
  ,        {
            id: "totalSKS",
            condition: "",
            label: "Total SKS",
            featureName: "totalSks",
            editable: false
          }
  ,        {
            id: "mulai",
            condition: "",
            label: "Mulai",
            featureName: "mulai",
            editable: false
          }
  ,        {
            id: "akhir",
            condition: "",
            label: "Akhir",
            featureName: "akhir",
            editable: false
          }
  ,        {
            id: "alasanPembatalan",
            condition: "",
            label: "Alasan Pembatalan",
            featureName: "alasanPembatalan",
            editable: false
          }
  ]}
      itemsEvents={(Item) => [
  	]}
    />
  )	
};

export default invalidCard;
