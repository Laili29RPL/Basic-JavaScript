let barang = [
    {nama: "Beras", harga:10000, jumlah: 5},
    {nama: "Gula", harga:14000, jumlah: 5},
    {nama:"Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10}
]
let total=0;

for (let i = 0; i < harga.length; i++) {
    total= harga[i]* jumlah[i];
 }

 console.log(`Total Bayar = ${total}`);