# API Documentation

## User Endpoints

### GET /api/users
- Description: Lấy danh sách người dùng
- Response: 200 OK, trả về mảng user

### POST /api/users
- Description: Tạo mới người dùng
- Body: { name, email }
- Response: 201 Created, trả về user vừa tạo
