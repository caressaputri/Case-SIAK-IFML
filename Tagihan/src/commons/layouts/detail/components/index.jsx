
import React from "react";
import { VisualizationAttr } from "@/commons/components";
import PropTypes from "prop-types";

const DetailComponentLayout = ({
  item,
  itemsAttrs,
  itemsEvents,
  itemsModals,
}) => {
  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined || amount === "") {
      return "-";
    }

    const n =
      typeof amount === "number"
        ? amount
        : Number(String(amount).split(",").join(""));

    if (Number.isNaN(n)) return amount;

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(n);
  };

  // Mengambil nilai yang akan ditampilkan
  const resolveContent = (va) => {
    const raw = item?.[va.featureName];

    if (raw === null || raw === undefined || raw === "") {
      return "-";
    }

    // Format nilai mata uang
    if (va?.condition?.includes("isCurrency")) {
      return formatCurrency(raw);
    }

    // Menangani data berbentuk object
    if (typeof raw === "object") {
      if (Array.isArray(raw)) {
        return raw
          .map((value) =>
            typeof value === "object"
              ? value?.kode ?? value?.nama ?? value?.id ?? "-"
              : value
          )
          .join(", ");
      }

      return (
        raw.kode ??
        raw.nama ??
        raw.name ??
        raw.label ??
        raw.id ??
        "-"
      );
    }

    return raw;
  };

  return (
    <div className="card card-body mx-auto w-full bg-white shadow-xl not-prose p-4 sm:p-8">

      {/* Atribut gambar */}
      {itemsAttrs?.map(
        (va) =>
          va.label.match("Gambar") && (
            <VisualizationAttr
              label={va.label}
              content={resolveContent(va)}
              isFile={va?.condition?.includes("isFile")}
              key={va.id}
            />
          )
      )}

      {/* Atribut detail */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4">
        {itemsAttrs?.map(
          (va) =>
            !va.label.match("Gambar") &&
            !va.label.match("Deskripsi") && (
              <VisualizationAttr
                label={va.label}
                content={resolveContent(va)}
                isFile={va?.condition?.includes("isFile")}
                key={va.id}
              />
            )
        )}
      </div>

      {/* Atribut deskripsi */}
      {itemsAttrs?.map(
        (va) =>
          va.label.match("Deskripsi") && (
            <VisualizationAttr
              label={va.label}
              content={resolveContent(va)}
              isFile={va?.condition?.includes("isFile")}
              key={va.id}
            />
          )
      )}

      {/* Events */}
      <div className="card-actions justify-end">
        {itemsEvents?.map((event, index) => (
          <React.Fragment key={index}>
            {event}
          </React.Fragment>
        ))}
      </div>

      {/* Modals */}
      {itemsModals?.map((modal, index) => (
        <React.Fragment key={index}>
          {modal}
        </React.Fragment>
      ))}
    </div>
  );
};

DetailComponentLayout.propTypes = {
  item: PropTypes.object.isRequired,
  itemsAttrs: PropTypes.array.isRequired,
  itemsEvents: PropTypes.array.isRequired,
  itemsModals: PropTypes.array.isRequired,
};

export default DetailComponentLayout;

