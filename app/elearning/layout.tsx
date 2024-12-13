import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Logo from "@/public/file.png";
import { Book, Gauge, LogOut, Menu } from "lucide-react";
import Background from "@/public/white-pattern-background-rb9i375szn8fc4h1.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ElearningLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="min-h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${Background.src})` }}>
            <nav className="border-b border-gray-300 flex items-center justify-between p-1 bg-white shadow-md">
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="rounded-full p-3 [&_svg]:size-5" aria-label="menu"><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="px-2 flex flex-col gap-4">
                            <SheetHeader className="items-start">
                                <SheetTitle>
                                    <div className="flex items-center gap-2">
                                        <Image src={Logo} alt="Logo" width={50} height={50} />
                                        <h1 className="font-bold text-base text-start">SMP Nusa Putra<br/>Tangerang</h1>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <Separator/>
                            <ScrollArea>
                                <div className="grid gap-3">
                                    <div className="grid gap-2">
                                        <h1 className="text-sm text-gray-500">Navigasi Menu</h1>
                                        <div className="grid gap-4 pl-3">
                                            <a href="#" className="flex items-center gap-2"><Gauge size={20}/> Dashboard</a>
                                            <a href="#" className="flex items-center gap-2"><Book size={20}/> Elearning</a>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        {/* Khusus Role Guru */}
                                        <h1 className="text-sm text-gray-500">Kelas Yang DiAjarkan</h1>
                                        <div className="grid gap-4 pl-3">
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9A</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9B</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9C</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9D</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9E</a>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        {/* Khusus Role Siswa */}
                                        <h1 className="text-sm text-gray-500">Kelas Yang Diikuti</h1>
                                        <div className="grid gap-4 pl-3">
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9A</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9B</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9C</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9D</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9E</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9A</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9B</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9C</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9D</a>
                                            <a href="#" className="flex items-center gap-2 pl-3">Kelas 9E</a>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex items-center gap-1">
                    <div className="flex items-end flex-col">
                        <h1 className="text-sm">Nama Pengguna</h1>
                        <small className="text-xs">Siswa</small>
                    </div>
                    <Avatar>
                        <Suspense fallback={<Skeleton className="h-12 w-12 rounded-full"/>}>
                            <AvatarImage src="https://avatar.iran.liara.run/public"/>
                        </Suspense>
                    </Avatar>
                    <Button variant="ghost" className="rounded-full p-3 [&_svg]:size-5" aria-label="logout">
                        <LogOut />
                    </Button>
                </div>
            </nav>
            <div className="p-4">
                {children}
            </div>
        </div>
    );
}