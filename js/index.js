function hitungLuas() {
  let alas = document.getElementById("alas-input").value;
  let tinggi = document.getElementById("tinggi-input").value;
  let hasil = 0.5 * parseFloat(alas) * parseFloat(tinggi);
  let kali = parseFloat(alas) * parseFloat(tinggi);

  const paragraph = document.createElement("p");
  paragraph.id = "element-sementara";
  const node = document.createTextNode(
    "L = 1/2 x " + alas + " x " + tinggi + " = 1/2 x " + kali + " = " + hasil
  );
  paragraph.appendChild(node);
  const element = document.getElementById("hasil-luas");
  element.appendChild(paragraph);

  return element;
}

function hitungKeliling() {
  let nilaiA = document.getElementById("nilai-a-input").value;
  let nilaiB = document.getElementById("nilai-b-input").value;
  let nilaiC = document.getElementById("nilai-c-input").value;
  let hasil = parseFloat(nilaiA) + parseFloat(nilaiB) + parseFloat(nilaiC);

  const paragraph = document.createElement("p");
  paragraph.id = "element-sementara";
  const node = document.createTextNode(
    "K = " + nilaiA + " + " + nilaiB + " + " + nilaiC + " = " + hasil
  );
  paragraph.appendChild(node);
  const element = document.getElementById("hasil-keliling");
  element.appendChild(paragraph);

  return element;
}

function resetLuas() {
  document.getElementById("input-field-luas").reset();
  document.getElementById("element-sementara").remove();
}

function resetKeliling() {
  document.getElementById("input-field-keliling").reset();
  document.getElementById("element-sementara").remove();
}
