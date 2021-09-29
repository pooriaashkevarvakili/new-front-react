import axios from '@/utils/axios.js'


export const widgets = async ()=>{
  return await axios.get('dashboard/widgets')
}

export const getMyDashboard = async ()=>{
  return await axios.get('dashboard/my')
}

export const removeWidget = async (id)=>{
  return await axios.delete(`dashboard/my/remove/${id}`)
}

