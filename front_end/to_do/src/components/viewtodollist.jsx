import axios from "axios"
import { useEffect, useState } from "react"
import {Container,Row,Col,Table} from "react-bootstrap"
export default function Viewtolist(){
    const [todos,setTodos] =useState([])
    useEffect(()=>{
        const api="http://localhost:5000/api/todos"
        axios.get(api)
        .then((res)=>{
            setTodos(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return(
        <>
        <Container>
            <Row>
                <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length >0?
                            todos.map((list)=>{
                                return(
                                    <tr key={list._id}>
                                        <td>
                                            {list.title}
                                        </td>
                                        <td>
                                            {list.description}
                                        </td>
                                        <td>
                                            {list.date}
                                        </td>
                                        <td>
                                            {list.time}
                                        </td>

                                    </tr>
                                )
                            }):"No data found"
                        }
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
}