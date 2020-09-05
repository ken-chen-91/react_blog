import React , {useState , useEffect} from 'react'
import '../static/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import {HomeOutlined,YoutubeOutlined , SmileOutlined} from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {

    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()


    },[])
    
    //跳转到列表页
  const handleClick = (e)=>{
    if(e.key==0){
        Router.push('/')
    }else{
        Router.push('/list?id='+e.key)
    }


}

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">Ken</span>
                    <span className="header-txt">一个菜鸟级别的前端程序员</span>
                </Col>
                <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={7}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item)=>{
                                return (
                                    <Menu.Item key={item.Id}>
                                        <YoutubeOutlined />
                                            {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                        
                        
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}

export default Header  

