import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = ({ password }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.password === password) {
      message.success("Kirish muvaffaqiyatli!");
      navigate("/profile");
    } else {
      message.error("Parol noto'g'ri!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Tizimga kirish</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <Form.Item
          name="password"
          label="Parol"
          rules={[{ required: true, message: "Iltimos, parol kiriting!" }]}
        >
          <Input.Password placeholder="Parol kiriting" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Kirish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;