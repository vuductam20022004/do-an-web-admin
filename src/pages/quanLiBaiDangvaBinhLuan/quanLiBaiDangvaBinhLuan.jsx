
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import SideBar from '~/pages/Boards/BoardContent/SideBars/SideBar'

import { Grid, Card, CardMedia, CardContent, Typography,Avatar, IconButton, Button, InputBase } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'


import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Box from '@mui/material/Box'


import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'


import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'


function QLBinhLuanBaiDang() {
  const HEIGHT_AD = '200PX'
  const [searchValue, setSearchValue] = useState('')
  const handleTimKiem = () => {

  }

  const [data, setMonAns] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:5000/board')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message)
        }
        const result = await response.json()
        setMonAns(result)
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
          {/* <ListItem button >
            <TextField id="outlined-basic"
              label="Tìm kiếm món ăn"
              type="text"
              size='small'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'white', cursor:'pointer' }} onClick = {handleTimKiem}/>
                  </InputAdornment>
                ),
                endAdornment: (

                  <CloseIcon
                    fontSize='small'
                    sx={{
                      color:'white',
                      cursor:'pointer'
                    }}
                    onClick = {(e) => setSearchValue('')}
                  />
                )
              }}
              sx={{
                minWidth: '120px',
                maxWidth: '500px',
                '& label':{ color:'white' },
                '& input':{ color:'white' },
                '& label.Mui-focused':{ color:'white' },
                '& .MuiOutlinedInput-root':{
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' }
                },
                ml:'20%'
              }}>
            </TextField>
          </ListItem> */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Tìm kiếm tài khoản"
              startAdornment={<SearchIcon sx={{ mr: 1 }} />}
              sx={{
                backgroundColor: '#F0F0F0',
                padding: '5px 10px',
                borderRadius: 2,
                width: '300px'
              }}
            />
            <Button variant="contained" color="secondary" sx={{ ml: 1 }}>
              Tìm kiếm
            </Button>
          </Box>
          <Box sx={{
            bgcolor: (theme) => ( theme.palette.mode === 'dark'? '#34495e' : '#1976d2'),
            height:(theme) => theme.trello.boardContentHeight - HEIGHT_AD,
            width:'85% ',
            p: '10px 15px',
            overflow: 'auto'
          }}>
            <Grid container spacing={2}>
              {data.map(item => (
                <Grid item xs={12} sm={6} md={3} key={item.ID}>
                  <Link to={`/chitietmonan/${item.ID}`} style={{ textDecoration:'none' }} >
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt='Ảnh Của Admin Quan Li'
                      />
                      <CardContent>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{item.moTa}</Typography>
                        <IconButton size="small">
                          <BookmarkBorderIcon />
                        </IconButton>
                        <Typography variant="body2" color="textSecondary">
                          {item.userId} Tác giả
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default QLBinhLuanBaiDang