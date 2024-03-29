import { Divider, Layout, Table } from "antd";
import React, { useEffect, useState } from "react";
import { BID_URL } from "../../config/server";
import { useAuth } from "../../hooks/useAuth";
import axios from 'axios'

const { Content, Footer } = Layout;
const columns = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'lot_name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Description',
        key: 'description',
        dataIndex: 'lot_description',
    },
    {
        title: 'Bid price',
        key: 'bid_price',
        dataIndex: 'bid_price',
        render: (text) => {
            return <p> {text} $</p>;
        }
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: 'Image',
        key: 'image_url',
        dataIndex: 'image_url',
        render: (url, _, idex) => {
            return <img key={idex} src={url} width={100} height={100} />
        }
    },
];

const YourBids = () => {
    const {token} = useAuth();
    const [data, setData] = useState(null);

    useEffect(() => {
        getAllBids();
    }, [])

    const getAllBids = async () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
                "Acept": "application/json"
            },
            params: {
                status: 'won'
            }
            
        }
      
        await axios.get(BID_URL,config)
            .then(res => res.data)
            .then(dataRes => {
               
                setData(dataRes.bids)
            })
    }
    return (
        <div>
            {data != null ?
                <div>
                    <div>
                        <Divider />
                        <Table
                            columns={columns}
                            dataSource={data}
                            rowKey={record=>record.id}
                        />


                    </div>
                </div> : <h1>Wait a moment</h1>}
        </div>


    )
}

export default YourBids;