fetch('https://crudcrud.com/api/621846f9cba8415a938f29aebb31115f/products')
  .then((Response) => Response.json())
  .then((data) => {
    const produk = document.getElementById('produk');

    data.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product._id}</td>
        <td>${product.nama}</td>
        <td>${product.jumlah}</td>
        <td>${product.harga}</td>
        `;

      produk.querySelector('thead').appendChild(row);
    });
  });
