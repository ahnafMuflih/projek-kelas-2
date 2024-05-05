//https://api.telegram.org/bot7089318758:AAH1YgFQi14UTl2JYQhJBaGAqbWLSMftIzM/sendMessage?chat_id=-1002083155170&text=halo%0Ajuga&parse_mode=html

//-1002083155170

//nama%3A%0Assssss%0Akelas%3A%0Assssss%0Apesan%3A%0Assssss

function kirimpesan() {
  var nama = document.getElementById("nama");

  var kelas = document.getElementById("kelas");

  var pesan = document.getElementById("pesan");

  var gabungan =
    "%0Anama%3A%0A" +
    nama.value +
    "%0Akelas%3A%0A" +
    kelas.value +
    "%0Apesan%3A%0A" +
    pesan.value;

  var token = "7089318758:AAH1YgFQi14UTl2JYQhJBaGAqbWLSMftIzM";
  var grup = "-1002083155170";

  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
    post: `POST`,
  });
}
