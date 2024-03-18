const mahasiswa = ["Rizky Fahrureza", "Lorem Ipsum", "Budi Santoso", "Dolor Sit Amet"]
// const selector = document.getElementsByName("body")

document.write("<h1>DAFTAR MAHASISWA</h1>")

for (i = 0; i < mahasiswa.length; ++i) {
    document.write(`<li>${mahasiswa[i]}</li>`)
}