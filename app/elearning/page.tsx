import { ForEach } from "@/components/control-flow";
import AddButton from "@/components/ui/add";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      kode: "#D2G34HD",
    },
    {
      judul_classroom: "Classroom 2",
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
      kode: "#D2G34HD",
    },
    {
      judul_classroom: "Classroom 2",
      nama_pengajar: "Nama Guru",
      mata_pelajaran: "Bahasa Inggris",
      kelas: "9A",
      dibuat_pada: "2024-05-16, Pukul 15.45 WIB",
      jumlah_siswa: 32,
      kode: "#D2G34HD",
    },
  ];
  const kelas = ["kelas a", "kelas b", "kelas c"];
  const mapel = ["mapel a", "mapel b", "mapel c"];

  return (
    <>
      <div className="h-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ForEach
          items={data}
          render={(item, index) => (
            <a
              href={`/elearning/${index}`}
              key={index}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl">{item.judul_classroom}</h1>
                    <small className="text-gray-500 font-normal">{item.nama_pengajar}</small>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-2">
                    <small>
                      Mata Pelajaran : <Badge className="bg-green-500">{item.mata_pelajaran}</Badge>
                    </small>
                    <small>
                      Kelas : <span className="text-gray-500">{item.kelas}</span>
                    </small>
                    <small>
                      Dibuat pada : <span className="text-gray-500">{item.dibuat_pada}</span>
                    </small>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>
                      <span>{item.jumlah_siswa}</span> Siswa
                    </p>
                    <p>{item.kode}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          )}
        />
        <div className="lg:hidden">
          <AddButton
            kelas={kelas}
            mapel={mapel}
          />
        </div>
      </div>
    </>
  );
}
