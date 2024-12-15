import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EllipsisVertical, File, Plus, Settings, Trash2, TriangleAlert, Upload, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Case, ForEach, If, Switch } from "@/components/control-flow";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AssignmentForm } from "@/components/assignment/form";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function ElearningPage() {
  const data = [
    {
      judul_assignment: "Assignment 1",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facere neque rem aspernatur voluptatum, accusantium quo provident facilis praesentium quia aliquid accusamus rerum architecto quas earum totam, adipisci labore tempora?",
      dibuat_pada: "2024-05-15, Pukul 13.21 WIB",
      tipe: "Tugas",
      batas_pengumpulan: "2024-05-18, Pukul 11.59 WIB",
      status: "Belum Mengumpulkan",
    },
    {
      judul_assignment: "Assignment 2",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facere neque rem aspernatur voluptatum, accusantium quo provident facilis praesentium quia aliquid accusamus rerum architecto quas earum totam, adipisci labore tempora?",
      dibuat_pada: "2024-05-15, Pukul 13.21 WIB",
      tipe: "Materi",
      files: ["Materi 1.pdf", "Materi 2.pdf", "Materi 3.pdf"],
    },
    {
      judul_assignment: "Assignment 3",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facere neque rem aspernatur voluptatum, accusantium quo provident facilis praesentium quia aliquid accusamus rerum architecto quas earum totam, adipisci labore tempora?",
      dibuat_pada: "2024-05-15, Pukul 13.21 WIB",
      tipe: "Ujian",
      batas_pengumpulan: "Tidak ada",
      status: "Sudah Mengumpulkan",
    },
  ];

  return (
    <div className="grid gap-4 pb-16">
      <div className="lg:h-[48px]"></div>
      <div className="fixed w-screen left-0 border-t h-12 bg-white bottom-0 lg:top-[49px] flex items-center justify-start shadow-center">
        <Button
          variant="ghost"
          className="flex flex-col lg:flex-row gap-1 place-content-center justify-items-center [&_svg]:size-5 w-32"
        >
          <Settings /> <small>Pengaturan</small>
        </Button>
        <AssignmentForm tipeForm="Buat" />
        <Button
          variant="ghost"
          className="flex flex-col lg:flex-row gap-1 place-content-center justify-items-center [&_svg]:size-5 w-32"
        >
          <Users2 /> <small>Siswa</small>
        </Button>
      </div>
      <ForEach
        items={data}
        render={(item, index) => (
          <Card
            key={index}
            className="max-w-[64rem] mx-auto"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Badge className="text-lg bg-teal-500">{item.judul_assignment}</Badge>
                {/* Role Guru */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="border-none px-2"
                    >
                      <EllipsisVertical size={16} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 grid gap-1 w-fit">
                    <AssignmentForm
                      tipeForm="Edit"
                      data={{
                        judulAssignment: item.judul_assignment,
                        tipe: item.tipe,
                        deskripsi: item.deskripsi,
                      }}
                    />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="border-none justify-start text-red-500"
                        >
                          <Trash2 color="red" /> Hapus
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="md:w-[40rem] w-80 rounded-md p-4">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex items-center gap-2">
                            <TriangleAlert color="red" />
                            <span className="text-red-500">Hapus Assignment</span>
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-start">Apakah anda yakin ingin menghapus assignment ini? Assignment yang sudah dihapus tidak dapat dikembalikan.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Batal</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-500">
                            <Trash2 />
                            <span>Hapus Assignment</span>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </PopoverContent>
                </Popover>
              </CardTitle>
              <CardDescription>{item.deskripsi}</CardDescription>
              <CardContent className="p-0 pt-4 grid gap-6">
                <div className="grid gap-2">
                  <small className="">
                    Dibuat pada : <span className="text-gray-500">{item.dibuat_pada}</span>
                  </small>
                  <small className="flex items-center gap-1">
                    Tipe :
                    <Switch value={item.tipe}>
                      <Case when={"Tugas"}>
                        <Badge className="bg-orange-500">{item.tipe}</Badge>
                      </Case>
                      <Case when={"Materi"}>
                        <Badge className="bg-blue-500">{item.tipe}</Badge>
                      </Case>
                      <Case when={"Ujian"}>
                        <Badge className="bg-red-500">{item.tipe}</Badge>
                      </Case>
                    </Switch>
                  </small>
                  <If condition={item.tipe === "Tugas" || item.tipe === "Ujian"}>
                    <small>
                      Batas pengumpulan : <span className="text-gray-500">{item.batas_pengumpulan}</span>
                    </small>
                    <If
                      condition={item.status === "Belum Mengumpulkan"}
                      otherwise={
                        <small>
                          Status : <Badge className="bg-green-500">{item.status}</Badge>
                        </small>
                      }
                    >
                      <small>
                        Status : <Badge className="bg-red-500">{item.status}</Badge>
                      </small>
                    </If>
                  </If>
                </div>
                <If condition={item.files !== undefined || item.status === "Belum Mengumpulkan"}>
                  <div className="grid gap-3">
                    <If condition={item.files !== undefined}>
                      <div className="grid gap-1">
                        {/* Maksimal 5 File */}
                        <ForEach
                          items={item.files!}
                          render={(item, index) => (
                            <p
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <File size={20} /> {item}
                            </p>
                          )}
                        />
                      </div>
                    </If>
                    <If condition={(item.tipe === "Tugas" || item.tipe === "Ujian") && item.status === "Belum Mengumpulkan"}>
                      {/* Role Siswa */}
                      <Button
                        variant="outline"
                        className="border-blue-500 border-2 [&_svg]:size-5"
                      >
                        <Upload />
                      </Button>
                    </If>
                  </div>
                </If>
              </CardContent>
            </CardHeader>
          </Card>
        )}
      />
    </div>
  );
}
