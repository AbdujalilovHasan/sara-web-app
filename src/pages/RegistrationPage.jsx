import { Form, Input, Button, Select, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    localStorage.setItem("isLoggedIn", "true");
    message.success("Ro'yxatdan o'tish muvaffaqiyatli!");
    navigate("/profile");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Ro'yxatdan o'tish</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form.Item
          name="name"
          label="Ism"
          rules={[{ required: true, message: "Iltimos, ismingizni kiriting!" }]}
        >
          <Input placeholder="Ismingizni kiriting" />
        </Form.Item>
        <Form.Item
          name="surname"
          label="Familiya"
          rules={[
            { required: true, message: "Iltimos, familiyangizni kiriting!" },
          ]}
        >
          <Input placeholder="Familiyangizni kiriting" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Yangi parol"
          rules={[{ required: true, message: "Iltimos, parol kiriting!" }]}
        >
          <Input.Password placeholder="Parol kiriting" />
        </Form.Item>
        <Form.Item
          name="profession"
          label="Kasb"
          rules={[{ required: true, message: "Iltimos, kasbingizni tanlang!" }]}
        >
          <Select placeholder="Kasbingizni tanlang">
            <Option value="frontend">Sartarosh</Option>
            <Option value="backend">Shifokor</Option>
            <Option value="designer">Va hokazo</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ backgroundColor: "#336183" }}
          >
            Ro'yxatdan o'tish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;