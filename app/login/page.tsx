import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Backround from "@/public/background-login.jpg";
import Image from "next/image";
import Logo from "@/public/file.png";

export default function LoginPage() {
    return (
        <div className="p-4 grid place-items-center h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${Backround.src})` }}>
            <div className="grid gap-6">
                <div className="grid place-content-center justify-items-center">
                    <Image src={Logo} alt="" className="w-16"/>
                    <h1 className="font-bold text-lg">SMP Nusa Putra Tangerang</h1>
                </div>
                <Card className="max-w-[28rem]">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Silakan masukan nomor induk dan password untuk masuk ke sistem. Jika anda belum memiliki akun, silakan hubungi staff TU.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-6">
                            <div className="grid gap-6">
                                <label>
                                    <span>Nomor Induk <span className="text-red-500">*</span></span>
                                    <Input name="nomorInduk" type="text" required />
                                </label>
                                <label>
                                    <span>Password <span className="text-red-500">*</span></span>
                                    <Input name="password" type="password" required />
                                </label>
                            </div>
                            <div className="grid gap-2">
                                <label className="flex items-center gap-2">
                                    <Input name="remember" type="checkbox" className="w-4"/>
                                    <span>Ingat saya</span>
                                </label>
                                <Button className="w-full">Login</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}