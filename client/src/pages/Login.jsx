// FWku4CUBOatiXOYE
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from '@/features/apis/auth.api.js';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const [LoginInput, setLoginInput] = useState({ email: '', password: '' });
  const [SignupInput, setSignupInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [
    registerUser,
    {
      data: registerdata,
      error: registererror,
      isLoading: registerisLoading,
      isSuccess: registeisSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: logindata,
      error: loginerror,
      isLoading: loginisLoading,
      isSuccess: loginisSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === 'SignUp') {
      setSignupInput({ ...SignupInput, [name]: value });
    } else {
      setLoginInput({ ...LoginInput, [name]: value });
    }
  };

  const SubmitFormHandler = async (type) => {
    const inputData = type === 'SignUp' ? SignupInput : LoginInput;
    const action = type === 'SignUp' ? registerUser : loginUser;
    await action(inputData)
  };

  useEffect(()=>{
    if(registeisSuccess && registerdata) {
        toast.success(registerdata.message || 'signup successfully' )
    }
    if (registererror) {
      toast.error(
        registererror?.data?.message || 'signup failed'
      );
    }
   if(loginisSuccess && logindata){
    toast.success(logindata.message || 'login successfully' )
    navigate('/')
   }
   if (loginerror) {
    toast.error(
      loginerror?.data?.message || 'login failed'
    );
  }
  }, [
    loginisLoading,
    registerisLoading,
    logindata,
    registerdata,
    loginerror,
    registererror
  ])
  return (
    <div className='w-full flex justify-center items-center mt-20'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='signUp'>SignUp</TabsTrigger>
          <TabsTrigger value='logIn'>LogIn</TabsTrigger>
        </TabsList>
        <TabsContent value='signUp'>
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  value={SignupInput.name}
                  onChange={(e) => changeInputHandler(e, 'SignUp')}
                  placeholder='Enter your Name'
                  require='true'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={SignupInput.email}
                  onChange={(e) => changeInputHandler(e, 'SignUp')}
                  placeholder='Enter your Email'
                  require='true'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  value={SignupInput.password}
                  onChange={(e) => changeInputHandler(e, 'SignUp')}
                  placeholder='Enter your password'
                  require='true'
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled= {registerisLoading}  onClick={() => SubmitFormHandler('SignUp')}>
               {
                   registerisLoading ? (
                    <>
                         <Loader2  className='mr-2 h-4 w-4 animate-spin'>Please Wait</Loader2>
                    </>
                   ): 'Register'
               }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='logIn'>
          <Card>
            <CardHeader>
              <CardTitle>LogIn</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={LoginInput.email}
                  onChange={(e) => changeInputHandler(e, 'LogIn')}
                  placeholder='Enter yor Email'
                  require='true'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='new'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  value={LoginInput.password}
                  onChange={(e) => changeInputHandler(e, 'LogIn')}
                  placeholder='Enter your password'
                  require='true'
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={loginisLoading} onClick={() => SubmitFormHandler('LogIn')}>
                {
                   loginisLoading ? (
                    <>
                       <Loader2 className='mr-2 h-4 w-4 animate-spin' >Please Wait</Loader2>
                    </>
                   ): 'Login'
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
