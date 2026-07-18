"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "ADMIN",
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setDone(true);
    } catch (err: any) {
      setError(err.message ?? "Gagal mendaftar");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-50 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <CheckCircle2 className="mx-auto text-green-500 mb-4" size={48} />
          <h1 className="text-xl font-bold text-slate-800 mb-2">Pendaftaran Terkirim</h1>
          <p className="text-slate-500 text-sm">
            Akun Anda berstatus <b>PENDING_APPROVAL</b>. Anda baru bisa login setelah
            Owner menyetujui akun ini melalui dashboard.
          </p>
          <a href="/login" className="inline-block mt-6 text-brand-600 font-medium hover:underline">
            Kembali ke halaman login
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-bold text-brand-700 mb-1">Registrasi Akun Baru</h1>
        <p className="text-sm text-slate-500 mb-4">
          Untuk pendaftar pertama (Owner 1), gunakan alur OTP WhatsApp khusus di{" "}
          <a href="/register/owner1" className="text-brand-600 hover:underline">
            halaman ini
          </a>
          .
        </p>

        <input required placeholder="Nama Lengkap" value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" />

        <input required type="email" placeholder="Email" value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" />

        <input required placeholder="No. WhatsApp (628xxxxxxxxxx)" value={form.phoneNumber}
          onChange={(e) => update("phoneNumber", e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" />

        <input required placeholder="Alamat" value={form.address}
          onChange={(e) => update("address", e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" />

        <input required placeholder="ID Perusahaan (company_id)" value={form.companyId}
          onChange={(e) => update("companyId", e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" />

        <select value={form.role} onChange={(e) => update("role", e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none">
          <option value="OWNER">OWNER (Owner ke-2 dst.)</option>
          <option value="ADMIN">ADMIN Kantor</option>
          <option value="GUDANG">Staf Gudang</option>
        </select>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-60">
          {loading && <Loader2 className="animate-spin" size={18} />}
          Daftar (Menunggu Persetujuan Owner)
        </button>
      </form>
    </main>
  );
}
