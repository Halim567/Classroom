import { ForEach } from "@/components/control-flow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export default function ClassroomPage() {
    const data = [
        {
            judul_classroom: "Classroom 1",
            nama_pengajar: "Nama Guru",
            mata_pelajaran: "Bahasa Inggris",
            kelas: "9A",
            dibuat_pada: "2024-05-16, Pukul 15.45 WIB",
            jumlah_siswa: 32,
            kode: "#D2G34HD",
        },
        {
            judul_classroom: "Classroom 2",
            nama_pengajar: "Nama Guru",
            mata_pelajaran: "Bahasa Inggris",
            kelas: "9A",
            dibuat_pada: "2024-05-16, Pukul 15.45 WIB",
            jumlah_siswa: 32,
            kode: "#D2G34HD"
        }
    ];

    return (
        <div className="grid gap-4">
            <ForEach items={data} render={(item, index) => (
                <a href={`/elearning/${index}`} key={index}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h1 className="text-xl">{ item.judul_classroom }</h1>
                                <small className="text-gray-500 font-normal">{ item.nama_pengajar }</small>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-2">
                                <small>Mata Pelajaran : <Badge className="bg-green-500">{ item.mata_pelajaran }</Badge></small>
                                <small>Kelas : <span className="text-gray-500">{ item.kelas }</span></small>
                                <small>Dibuat pada : <span className="text-gray-500">{ item.dibuat_pada }</span></small>
                            </div>
                            <div className="flex items-center justify-between">
                                <p><span>{ item.jumlah_siswa }</span> Siswa</p>
                                <p>{ item.kode }</p>
                            </div>
                        </CardContent>
                    </Card>
                </a>
            )}/>
            <Dialog>
                <DialogTrigger asChild className="fixed">
                    <Button className="rounded-full h-14 w-14 right-4 bottom-4 [&_svg]:size-6 shadow-lg"><Plus/></Button>
                </DialogTrigger>
                <DialogContent className="w-80 rounded-md p-4">
                    <DialogHeader className="items-start text-start">
                        <DialogTitle>Tambah Classroom</DialogTitle>
                        <DialogDescription>
                            Masukan nama ruang kelas, pilih kelas, dan mata pelajaran yang akan diajarkan.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="grid gap-6">
                        <div className="grid gap-6">
                            <label htmlFor="">
                                <span>Nama Classroom <span className="text-red-500">*</span></span>
                                <Input type="text" className="input" placeholder="Nama Classroom"/>
                            </label>
                            <label htmlFor="">
                                <span>Pilih Kelas <span className="text-red-500">*</span></span>
                                <Select name="kelas">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Kelas"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="7A">Kelas 7A</SelectItem>
                                            <SelectItem value="7B">Kelas 7B</SelectItem>
                                            <SelectItem value="8A">Kelas 8A</SelectItem>
                                            <SelectItem value="8B">Kelas 8B</SelectItem>
                                            <SelectItem value="9A">Kelas 9A</SelectItem>
                                            <SelectItem value="9B">Kelas 9B</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </label>
                            <label htmlFor="">
                                <span>Mata Pelajaran <span className="text-red-500">*</span></span>
                                <Select name="mata_pelajaran">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Mata Pelajaran"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Bahasa Inggris">Bahasa Inggris</SelectItem>
                                            <SelectItem value="Bahasa Indonesia">Bahasa Indonesia</SelectItem>
                                            <SelectItem value="Matematika">Matematika</SelectItem>
                                            <SelectItem value="IPA">IPA</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </label>
                        </div>
                        <Button className="w-full mt-4">Tambah Classroom</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}