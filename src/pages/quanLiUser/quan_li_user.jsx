import { Box, Toolbar, Typography, InputBase, Button, Paper, Grid, Avatar, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material'
import { Home, Search as SearchIcon, Add, Comment, AccountCircle, Edit, Delete } from '@mui/icons-material'
import SideBar from '~/pages/Boards/BoardContent/SideBars/SideBar'
import AppBar from '~/components/AppBar/AppBar'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'



function QuanLiUser() {

  const [data, setUser] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:5000/lay-user')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message)
        }
        const result = await response.json()
        setUser(result)
      } catch (error) {
        console.error('Lỗi lấy dữ liệu:', error)
      }
    }
    fetchData()
  }, [])

  return (

    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
      <AppBar />

      <Box sx={{
        display:'flex'
      }}>
        <Box sx={{
          bgcolor: (theme) => ( theme.palette.mode === 'dark'? '#34495e' : '#1976d2'),
          height:(theme) => theme.trello.boardContentHeight,
          width:'15% ',
          p: '10px 0'
        }}>
          <SideBar />

        </Box>

        <Box sx={{
          bgcolor: (theme) => ( theme.palette.mode === 'dark'? '#34495e' : '#1976d2'),
          height:(theme) => theme.trello.boardContentHeight,
          width:'85% ',
          p: '10px 15px',
          overflow: 'auto'
        }}>
          <Box sx={{
            bgcolor: (theme) => ( theme.palette.mode === 'dark'? '#34495e' : '#1976d2'),
            height:(theme) => theme.trello.boardContentHeight,
            width:'85% ',
            p: '10px 15px',
            overflow: 'auto'
          }}>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InputBase
                placeholder="Tìm kiếm user"
                startAdornment={<SearchIcon sx={{ mr: 1 }} />}
                sx={{
                  backgroundColor: '#F0F0F0',
                  padding: '5px 10px',
                  borderRadius: 2,
                  width: '300px',
                  color:'black',
                  ml:'18%'
                }}
              />
              <Button variant="contained" color="secondary" sx={{ ml: 1, mr:5 }}>
                Tìm kiếm
              </Button>
              <Button variant="outlined" color="secondary" startIcon={<Add />}>
                    Viết món mới
              </Button>
            </Box>


            {/* User Cards */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {data.map( item => (
                <Grid item xs={6} sm={4} md={3} key={item.ID}>
                  <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <Link to={`/${item.ID}`} style={{ textDecoration: 'none' }}>
                      <Avatar
                        alt="User Avatar"
                        src="https://img.thuthuattinhoc.vn/uploads/2019/10/26/hinh-anh-que-huong-con-song-uon-quanh_055458566.jpg"
                        sx={{ width: 56, height: 56, margin: 'auto' }}
                      />
                    </Link>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {item.fullName}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ mr: 2 }}>
                Chỉnh sửa
              </Button>
              <Button variant="contained" color="error" startIcon={<Delete />}>
                Xóa
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>

  )
}

export default QuanLiUser
