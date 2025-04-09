import React from "react";

import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import useMessage from "antd/es/message/useMessage";
import { Link, useNavigate } from "react-router-dom";
import { BasicLayout } from "../components/layout";
import { login } from "../service/login";
import { handleBaseApiResponse } from "../utils/message";

const LoginPage = () => {
    const [messageApi, contextHolder] = useMessage();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        let email = values['username'];
        let password = values['password'];
        let res = await login(email, password);
        handleBaseApiResponse(res, messageApi, () => navigate("/"));
    };

    return (
        <BasicLayout>
            {contextHolder}
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/login.png)`, // 修改为你的背景图片路径
                backgroundSize: 'cover', // 覆盖整个区域
                backgroundPosition: 'center', // 居中显示
                backgroundRepeat: 'no-repeat', // 不重复
                minHeight: '100vh', // 确保占满整个视窗
                display: 'flex', // 可选：用于居中表单
                justifyContent: 'center', // 可选：水平居中
                alignItems: 'center', // 可选：垂直居中
            }}>
                <LoginForm
                    logo={process.env.PUBLIC_URL + '/logo.webp'}
                    title="Book Store"
                    subTitle="电子书城"
                    onFinish={onSubmit}
                    style={{
                        background: 'rgba(255, 255, 255, 1)', // 可选：给表单加半透明白色背景
                        padding: '24px', // 可选：增加内边距
                        borderRadius: '8px', // 可选：圆角
                        maxWidth: '400px', // 可选：限制表单宽度
                    }}
                >
                    {/* 表单内容保持不变 */}
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'请输入用户名'}
                        rules={[{
                            required: true,
                            message: '请输入用户名!',
                        }]}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'密码'}
                        rules={[{
                            required: true,
                            message: '请输入密码！',
                        }]}
                    />
                    <div style={{ marginBlockEnd: 24 }}>
                        <Link to='/register'>新账号？前往注册</Link>
                        <a style={{ float: 'right' }} href="#/">忘记密码</a>
                    </div>
                </LoginForm>
            </div>
        </BasicLayout>
    );
};
export default LoginPage;