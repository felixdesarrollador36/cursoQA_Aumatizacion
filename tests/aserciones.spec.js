import { test, expect } from '@playwright/test';

test('login page title', async ({ page }) => {
  await page.screenshot({ path: 'screenshot.png' });
  await page.goto('http://localhost:3000/');

     // =========================
    // 🌐 1. Ir al login
    // =========================
    await page.screenshot({ path: 'screenshot.png' });
    await expect(page).toHaveURL('http://localhost:3000/');
    await page.goto('http://localhost:3000/');

    // ✅ Assert: título visible
    await expect(page.getByText('Inicio de Sesión')).toBeVisible();

    // =========================
    // 🔐 2. Login
    // =========================
    await page.pause(); // para inspeccionar el DOM antes de interactuar
    const usuarioInput = page.getByPlaceholder('Usuario');
    const passwordInput = page.getByPlaceholder('Contraseña');
    const rolInput = page.getByPlaceholder('Rol');

    await expect(usuarioInput).toBeVisible();
    await expect(rolInput).toBeEnabled();
    await usuarioInput.fill('jessica');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('pass123');

    // opcional si usas rol
    await rolInput.fill('Empleado');
    await page.pause(); // para inspeccionar el DOM antes de interactuar

    const botonIngresar = page.getByRole('button', { name: 'Ingresar' });
    await expect(botonIngresar).toBeVisible();
    await expect(botonIngresar).toBeEnabled();
    await botonIngresar.click();


    // =========================
    // ✅ 3. Validar Dashboard
    // =========================
    
    await expect(page.getByText('Menú Principal')).toBeVisible();

});

// test.describe('Flujo completo - Sistema Restaurante', () => {

//   test('Login + Crear Orden', async ({ page }) => {

 
//     // Validar botones
//     await expect(page.locator('text=Crear Orden')).toBeVisible();
//     await expect(page.locator('text=Gestión de Productos')).toBeVisible();
//     await expect(page.locator('text=Registrar Empleado')).toBeVisible();

//     // =========================
//     // 🧾 4. Ir a Crear Orden
//     // =========================
//     await page.click('text=Crear Orden');

//     // =========================
//     // ✅ 5. Validar pantalla Crear Orden
//     // =========================
//     await expect(page).toHaveURL(/create-order/);
//     await expect(page.locator('text=Crear Orden')).toBeVisible();

//     // =========================
//     // 📋 6. Validar campos
//     // =========================
//     const mesaSelect = page.locator('select').nth(0);
//     const empleadoSelect = page.locator('select').nth(1);
//     const clienteSelect = page.locator('select').nth(2);

//     await expect(mesaSelect).toBeVisible();
//     await expect(empleadoSelect).toBeVisible();
//     await expect(clienteSelect).toBeVisible();

//     // =========================
//     // 🎯 7. Seleccionar opciones
//     // =========================
//     await mesaSelect.selectOption({ index: 1 });
//     await empleadoSelect.selectOption({ index: 1 });

//     // cliente es opcional → lo dejamos vacío

//     // =========================
//     // ➕ 8. Validar botón agregar producto
//     // =========================
//     const btnAgregarProducto = page.locator('button:has-text("Agregar producto")');
//     await expect(btnAgregarProducto).toBeVisible();

//     // (opcional si abre modal)
//     await btnAgregarProducto.click();

//     // =========================
//     // 🧾 9. Crear Orden
//     // =========================
//     const btnCrearOrden = page.locator('button:has-text("Crear Orden")');
//     await expect(btnCrearOrden).toBeEnabled();

//     await btnCrearOrden.click();

//     // =========================
//     // ✅ 10. Assert final
//     // =========================
//     // Aquí depende de tu app:
//     // - mensaje éxito
//     // - redirect
//     // - orden creada

//     // Ejemplo 1: mensaje
//     await expect(page.locator('text=Orden creada')).toBeVisible();

//     // Ejemplo 2: redirect
//     // await expect(page).toHaveURL(/orders/);

//   });

// });