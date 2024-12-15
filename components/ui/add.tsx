import { Plus } from "lucide-react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Input } from "./input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";
import { ForEach } from "../control-flow";

export default function AddButton({ kelas, mapel }: { kelas: string[]; mapel: string[] }) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="lg:relative fixed"
      >
        <Button className="rounded-full h-14 w-14 lg:h-10 lg:w-10 bottom-4 right-4 lg:bottom-0 lg:right-0 [&_svg]:size-6 lg:bg-white lg:hover:bg-gray-200">
          <Plus className="lg:text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md p-4">
        <DialogHeader className="items-start text-start">
          <DialogTitle>Tambah Classroom</DialogTitle>
          <DialogDescription>Masukan nama ruang kelas, pilih kelas, dan mata pelajaran yang akan diajarkan.</DialogDescription>
        </DialogHeader>
        <form className="grid gap-6">
          <div className="grid gap-6">
            <label htmlFor="">
              <span>
                Nama Classroom <span className="text-red-500">*</span>
              </span>
              <Input
                type="text"
                className="input"
                placeholder="Nama Classroom"
              />
            </label>
            <label htmlFor="">
              <span>
                Pilih Kelas <span className="text-red-500">*</span>
              </span>
              <Select name="kelas">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kelas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <ForEach
                      fallback={<div>tidak ada data</div>}
                      items={kelas}
                      render={(item, index) => (
                        <SelectItem
                          value={item}
                          key={index}
                        >
                          {item}
                        </SelectItem>
                      )}
                    />
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
            <label htmlFor="">
              <span>
                Mata Pelajaran <span className="text-red-500">*</span>
              </span>
              <Select name="mata_pelajaran">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Mata Pelajaran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <ForEach
                      fallback={<div>tidak ada data</div>}
                      items={mapel}
                      render={(item, index) => (
                        <SelectItem
                          value={item}
                          key={index}
                        >
                          {item}
                        </SelectItem>
                      )}
                    />
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
          </div>
          <Button className="w-full mt-4">Tambah Classroom</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
