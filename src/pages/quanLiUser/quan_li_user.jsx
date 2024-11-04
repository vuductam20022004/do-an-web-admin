import { Box, Toolbar, Typography, InputBase, Button, Paper, Grid, Avatar, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material'
import { Home, Search as SearchIcon, Add, Comment, AccountCircle, Edit, Delete } from '@mui/icons-material'
import SideBar from '~/pages/Boards/BoardContent/SideBars/SideBar'
import AppBar from '~/components/AppBar/AppBar'
import { AppBar as MyAppBar } from '@mui/material'


function QuanLiUser() {
  const HEIGHT_AD = '200PX'
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
            height:(theme) => theme.trello.boardContentHeight - HEIGHT_AD,
            width:'85% ',
            p: '10px 15px',
            overflow: 'auto'
          }}>
            <MyAppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: '#E0E0E0' }}>
              <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                <Button variant="outlined" color="secondary" startIcon={<Add />}>
                  Viết món mới
                </Button>
              </Toolbar>
            </MyAppBar>

            {/* User Cards */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[...Array(8)].map((_, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <Avatar
                      alt="User Avatar"
                      src="/path/to/avatar.png"
                      sx={{ width: 56, height: 56, margin: 'auto' }}
                    />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Tên tài khoản
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
