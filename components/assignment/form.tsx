import { Edit, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { If } from "../control-flow";

export function AssignmentForm(
  props:
    | {
        tipeForm: "Buat";
      }
    | {
        tipeForm: "Edit";
        data: {
          judulAssignment: string;
          tipe: string;
          deskripsi: string;
        };
      }
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <If
          condition={props.tipeForm === "Buat"}
          otherwise={
            <Button
              variant="ghost"
              className="border-none"
            >
              <Edit /> Perbaharui
            </Button>
          }
        >
          <Button
            variant="ghost"
            className="flex flex-col lg:flex-row gap-1 place-content-center justify-items-center [&_svg]:size-5 w-32"
          >
            <Plus /> <small>Buat Tugas</small>
          </Button>
        </If>
      </DialogTrigger>
      <DialogContent className="w-80 rounded-md p-4">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit color="blue" />
            <span className="text-blue-500">
              <If
                condition={props.tipeForm === "Buat"}
                otherwise="Perbaharui"
              >
                Buat
              </If>{" "}
              Assignment
            </span>
          </DialogTitle>
          <DialogDescription className="text-start">
            <If
              condition={props.tipeForm === "Buat"}
              otherwise="Perbaharui data assignment ini dengan data yang baru. Pastikan data yang anda masukan benar."
            >
              Masukan judul assignment, tipe assignment, batas pengumpulan, file, dan deskripsi assignment yang akan dibuat. Pastikan data yang anda masukan benar.
            </If>
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-6">
          <div className="grid gap-6">
            <label htmlFor="">
              <span>
                Judul Assignment <span className="text-red-500">*</span>
              </span>
              <Input
                type="text"
                name="judulAssignment"
                defaultValue={props.tipeForm === "Edit" ? props.data.judulAssignment : undefined}
              />
            </label>
            <label htmlFor="">
              <span>
                Tipe <span className="text-red-500">*</span>
              </span>
              <Select name="tipe">
                <SelectTrigger>
                  <SelectValue
                    placeholder="Pilih Tipe Assignment"
                    defaultValue={props.tipeForm === "Edit" ? props.data.judulAssignment : ""}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Tugas">Tugas</SelectItem>
                    <SelectItem value="Materi">Materi</SelectItem>
                    <SelectItem value="Ujian">Ujian</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
            <label htmlFor="">
              <span>Batas Pengumpulan</span>
              <Input
                type="datetime-local"
                name="batasPengumpulan"
              />
            </label>
            <label htmlFor="">
              <span>File</span>
              <Input
                type="file"
                name="file"
                multiple
              />
            </label>
            <label htmlFor="">
              <span>Deskripsi</span>
              <Textarea
                name="deskripsi"
                className="resize-none"
                defaultValue={props.tipeForm === "Edit" ? props.data.deskripsi : undefined}
              ></Textarea>
            </label>
          </div>
          <Button className="flex items-center gap-2">
            <Edit />
            <span>
              <If
                condition={props.tipeForm === "Buat"}
                otherwise="Simpan Perubahan"
              >
                Buat Assignment
              </If>
            </span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
