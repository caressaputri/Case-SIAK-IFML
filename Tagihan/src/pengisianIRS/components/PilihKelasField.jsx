import React, { forwardRef, useEffect, useState } from "react";
import CheckBoxField from "@/commons/components/Form/CheckBoxField";

const bacaSlot = (kelas) =>
  (kelas.slotJadwal || "")
    .split(";")
    .filter(Boolean)
    .map((s) => {
      const [hari, mulai, selesai] = s.split("|");
      return { hari, mulai, selesai };
    });

const jadwalBentrok = (a, b) =>
  bacaSlot(a).some((x) =>
    bacaSlot(b).some(
      (y) => x.hari === y.hari && x.mulai < y.selesai && y.mulai < x.selesai
    )
  );

const PilihKelasField = forwardRef((props, ref) => {
  const { label, options = [], onChange, isRequired, fieldState } = props;
  const [dipilih, setDipilih] = useState([]);

  useEffect(() => {
    onChange(dipilih.join(","));
  }, [dipilih]);

  const alasanTidakBisa = (kelas) => {
    if (dipilih.includes(kelas.id)) return null;
    if (Number(kelas.sisaKuota) <= 0) return "kelas penuh";
    const lawan = options.find(
      (k) => dipilih.includes(k.id) && jadwalBentrok(k, kelas)
    );
    return lawan ? `bentrok dengan ${lawan.nama}` : null;
  };

  const ubah = (kelas) =>
    setDipilih((lama) =>
      lama.includes(kelas.id)
        ? lama.filter((id) => id !== kelas.id)
        : [...lama, kelas.id]
    );

  return (
    <div className="form-control break-inside-avoid">
      {label && (
        <label className="label font-bold uppercase">
          {label}
          {isRequired && <font className="ml-1" color="red">*</font>}
        </label>
      )}
      {options.map((kelas) => {
        const alasan = alasanTidakBisa(kelas);
        return (
          <CheckBoxField
            ref={ref}
            key={kelas.id}
            label={alasan ? `${kelas.name} (${alasan})` : kelas.name}
            checked={dipilih.includes(kelas.id)}
            value={kelas.id}
            disabled={Boolean(alasan)}
            onChange={() => ubah(kelas)}
          />
        );
      })}
      {fieldState?.error && (
        <span className="text-error text-sm">{fieldState.error.message}</span>
      )}
    </div>
  );
});

PilihKelasField.displayName = "PilihKelasField";

export default PilihKelasField;
