import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Figtree } from "next/font/google";
const figtree = Figtree({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stretchio-pre-launch",
  description:
    "Transform your office routine with Stretchio, the ultimate wellness platform designed for desk workers. Say goodbye to stiffness, burnout, and unproductive days with our smart reminders, guided stretches, and personalized wellness routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-background relative text-white ${figtree.className}`}
      >
        <iframe
          src="data:text/html;base64,PGh0bWw+CiAgICAgICAgPGhlYWQ+CiAgICAgICAgICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSI+CiAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgIGh0bWwsIGJvZHl7CiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgPHNjcmlwdCB0eXBlPSJpbXBvcnRtYXAiPgp7CiAgICAiaW1wb3J0cyI6IHsKICAgICAgICAicmVhY3QiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvcmVhY3RAMTguMC4yIiwKICAgICAgICAicmVhY3QtZG9tIjogImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjIiLAogICAgICAgICJ0aHJlZSI6ICJodHRwczovL2Nkbi5za3lwYWNrLmRldi90aHJlZUAwLjE0OC4wIiwKICAgICAgICAicmVhY3QtdGhyZWUvZmliZXIiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCIKICAgIH0KfQo8L3NjcmlwdD4KPHN0eWxlPgogICAgaHRtbCwgYm9keXsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgYm9yZGVyOiAwOwogICAgfQogICAgLm50LWVtYmVkewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGhlaWdodDogMTAwJTsKICAgIH0KICAgIC5udC1lbWJlZCBjYW52YXN7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgfQo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9Im1vZHVsZSI+CiAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWYsdXNlTWVtb30gZnJvbSAncmVhY3QnOwogICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CiAgICBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7CiAgICBpbXBvcnQge0NhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlfSBmcm9tICdyZWFjdC10aHJlZS9maWJlcic7CgogICAgbGV0IGVtYmVkUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgZW1iZWRSb290LmNsYXNzTmFtZSA9ICJudC1lbWJlZCI7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVtYmVkUm9vdCk7CgogICAgY29uc3QgVGV4dHVyZU1lc2ggPSAoKSA9PiB7CiAgICAgICAgY29uc3QgbWVzaCA9IHVzZVJlZihudWxsKQogICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgY29uc3QgeyBjbG9jaywgbW91c2UsIGdsLCBzY2VuZSwgY2FtZXJhIH0gPSBzdGF0ZQogICAgICAgICAgICBpZihtZXNoLmN1cnJlbnQpewogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCAvIDIgKyAwLjUsIG1vdXNlLnkgLyAyICsgMC41XQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfdGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkKICAgICAgICAgICAgICAgIGxldCBjID0gZ2wuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZSA9IFtjLndpZHRoLGMuaGVpZ2h0XQogICAgICAgICAgICB9CiAgICAgICAgfSkKICAgICAgICAKICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnbWVzaCcsCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsMF0sCiAgICAgICAgICAgICAgICBzY2FsZTogMSwKICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BsYW5lR2VvbWV0cnknLHthcmdzOlsyNDAsNTgwXX0pLCAKICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2hhZGVyTWF0ZXJpYWwnLHsKICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgLy8gRnJhZ21lbnQgc2hhZGVyCgoKCi8vIFVuaWZvcm1zCgp1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uOwoKdW5pZm9ybSB2ZWMyIHVfbW91c2U7Cgp1bmlmb3JtIGZsb2F0IHVfdGltZTsKCnVuaWZvcm0gdmVjNCB1X2NvbG9yc1syXTsKCnVuaWZvcm0gZmxvYXQgdV9pbnRlbnNpdHk7Cgp1bmlmb3JtIGZsb2F0IHVfcmF5czsKCnVuaWZvcm0gZmxvYXQgdV9yZWFjaDsKCgoKCgojaWZuZGVmIEZOQ19NT0QyODkKI2RlZmluZSBGTkNfTU9EMjg5CgpmbG9hdCBtb2QyODkoY29uc3QgaW4gZmxvYXQgeCkgeyByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuOyB9CnZlYzIgbW9kMjg5KGNvbnN0IGluIHZlYzIgeCkgeyByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuOyB9CnZlYzMgbW9kMjg5KGNvbnN0IGluIHZlYzMgeCkgeyByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuOyB9CnZlYzQgbW9kMjg5KGNvbnN0IGluIHZlYzQgeCkgeyByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuOyB9CgojZW5kaWYKCgoKCgojaWZuZGVmIEZOQ19QRVJNVVRFCiNkZWZpbmUgRk5DX1BFUk1VVEUKCmZsb2F0IHBlcm11dGUoY29uc3QgaW4gZmxvYXQgeCkgeyByZXR1cm4gbW9kMjg5KCgoeCAqIDM0LjApICsgMS4wKSAqIHgpOyB9CnZlYzIgcGVybXV0ZShjb25zdCBpbiB2ZWMyIHgpIHsgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4wKSArIDEuMCkgKiB4KTsgfQp2ZWMzIHBlcm11dGUoY29uc3QgaW4gdmVjMyB4KSB7IHJldHVybiBtb2QyODkoKCh4ICogMzQuMCkgKyAxLjApICogeCk7IH0KdmVjNCBwZXJtdXRlKGNvbnN0IGluIHZlYzQgeCkgeyByZXR1cm4gbW9kMjg5KCgoeCAqIDM0LjApICsgMS4wKSAqIHgpOyB9CgojZW5kaWYKCgoKI2lmbmRlZiBGTkNfVEFZTE9SSU5WU1FSVAojZGVmaW5lIEZOQ19UQVlMT1JJTlZTUVJUCmZsb2F0IHRheWxvckludlNxcnQoaW4gZmxvYXQgcikgeyByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByOyB9CnZlYzIgdGF5bG9ySW52U3FydChpbiB2ZWMyIHIpIHsgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjsgfQp2ZWMzIHRheWxvckludlNxcnQoaW4gdmVjMyByKSB7IHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7IH0KdmVjNCB0YXlsb3JJbnZTcXJ0KGluIHZlYzQgcikgeyByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByOyB9CiNlbmRpZgoKCiNpZm5kZWYgRk5DX1FVSU5USUMKI2RlZmluZSBGTkNfUVVJTlRJQyAKCmZsb2F0IHF1aW50aWMoY29uc3QgaW4gZmxvYXQgdikgeyByZXR1cm4gdip2KnYqKHYqKHYqNi4wLTE1LjApKzEwLjApOyB9CnZlYzIgIHF1aW50aWMoY29uc3QgaW4gdmVjMiB2KSAgeyByZXR1cm4gdip2KnYqKHYqKHYqNi4wLTE1LjApKzEwLjApOyB9CnZlYzMgIHF1aW50aWMoY29uc3QgaW4gdmVjMyB2KSAgeyByZXR1cm4gdip2KnYqKHYqKHYqNi4wLTE1LjApKzEwLjApOyB9CnZlYzQgIHF1aW50aWMoY29uc3QgaW4gdmVjNCB2KSAgeyByZXR1cm4gdip2KnYqKHYqKHYqNi4wLTE1LjApKzEwLjApOyB9CgojZW5kaWYKCgoKI2lmbmRlZiBGTkNfUE5PSVNFCiNkZWZpbmUgRk5DX1BOT0lTRQoKZmxvYXQgcG5vaXNlKGluIHZlYzIgUCwgaW4gdmVjMiByZXApIHsKICAgIHZlYzQgUGkgPSBmbG9vcihQLnh5eHkpICsgdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApOwogICAgdmVjNCBQZiA9IGZyYWN0KFAueHl4eSkgLSB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7CiAgICBQaSA9IG1vZChQaSwgcmVwLnh5eHkpOyAKICAgIFBpID0gbW9kMjg5KFBpKTsgICAgICAgIAogICAgdmVjNCBpeCA9IFBpLnh6eHo7CiAgICB2ZWM0IGl5ID0gUGkueXl3dzsKICAgIHZlYzQgZnggPSBQZi54enh6OwogICAgdmVjNCBmeSA9IFBmLnl5d3c7CgogICAgdmVjNCBpID0gcGVybXV0ZShwZXJtdXRlKGl4KSArIGl5KTsKCiAgICB2ZWM0IGd4ID0gZnJhY3QoaSAqICgxLjAgLyA0MS4wKSkgKiAyLjAgLSAxLjAgOwogICAgdmVjNCBneSA9IGFicyhneCkgLSAwLjUgOwogICAgdmVjNCB0eCA9IGZsb29yKGd4ICsgMC41KTsKICAgIGd4ID0gZ3ggLSB0eDsKCiAgICB2ZWMyIGcwMCA9IHZlYzIoZ3gueCxneS54KTsKICAgIHZlYzIgZzEwID0gdmVjMihneC55LGd5LnkpOwogICAgdmVjMiBnMDEgPSB2ZWMyKGd4LnosZ3kueik7CiAgICB2ZWMyIGcxMSA9IHZlYzIoZ3gudyxneS53KTsKCiAgICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KGcwMCwgZzAwKSwgZG90KGcwMSwgZzAxKSwgZG90KGcxMCwgZzEwKSwgZG90KGcxMSwgZzExKSkpOwogICAgZzAwICo9IG5vcm0ueDsKICAgIGcwMSAqPSBub3JtLnk7CiAgICBnMTAgKj0gbm9ybS56OwogICAgZzExICo9IG5vcm0udzsKCiAgICBmbG9hdCBuMDAgPSBkb3QoZzAwLCB2ZWMyKGZ4LngsIGZ5LngpKTsKICAgIGZsb2F0IG4xMCA9IGRvdChnMTAsIHZlYzIoZngueSwgZnkueSkpOwogICAgZmxvYXQgbjAxID0gZG90KGcwMSwgdmVjMihmeC56LCBmeS56KSk7CiAgICBmbG9hdCBuMTEgPSBkb3QoZzExLCB2ZWMyKGZ4LncsIGZ5LncpKTsKCiAgICB2ZWMyIGZhZGVfeHkgPSBxdWludGljKFBmLnh5KTsKICAgIHZlYzIgbl94ID0gbWl4KHZlYzIobjAwLCBuMDEpLCB2ZWMyKG4xMCwgbjExKSwgZmFkZV94eS54KTsKICAgIGZsb2F0IG5feHkgPSBtaXgobl94LngsIG5feC55LCBmYWRlX3h5LnkpOwogICAgcmV0dXJuIDIuMyAqIG5feHk7Cn0KCmZsb2F0IHBub2lzZShpbiB2ZWMzIFAsIGluIHZlYzMgcmVwKSB7CiAgICB2ZWMzIFBpMCA9IG1vZChmbG9vcihQKSwgcmVwKTsgCiAgICB2ZWMzIFBpMSA9IG1vZChQaTAgKyB2ZWMzKDEuMCksIHJlcCk7IAogICAgUGkwID0gbW9kMjg5KFBpMCk7CiAgICBQaTEgPSBtb2QyODkoUGkxKTsKICAgIHZlYzMgUGYwID0gZnJhY3QoUCk7IAogICAgdmVjMyBQZjEgPSBQZjAgLSB2ZWMzKDEuMCk7IAogICAgdmVjNCBpeCA9IHZlYzQoUGkwLngsIFBpMS54LCBQaTAueCwgUGkxLngpOwogICAgdmVjNCBpeSA9IHZlYzQoUGkwLnl5LCBQaTEueXkpOwogICAgdmVjNCBpejAgPSBQaTAuenp6ejsKICAgIHZlYzQgaXoxID0gUGkxLnp6eno7CgogICAgdmVjNCBpeHkgPSBwZXJtdXRlKHBlcm11dGUoaXgpICsgaXkpOwogICAgdmVjNCBpeHkwID0gcGVybXV0ZShpeHkgKyBpejApOwogICAgdmVjNCBpeHkxID0gcGVybXV0ZShpeHkgKyBpejEpOwoKICAgIHZlYzQgZ3gwID0gaXh5MCAqICgxLjAgLyA3LjApOwogICAgdmVjNCBneTAgPSBmcmFjdChmbG9vcihneDApICogKDEuMCAvIDcuMCkpIC0gMC41OwogICAgZ3gwID0gZnJhY3QoZ3gwKTsKICAgIHZlYzQgZ3owID0gdmVjNCgwLjUpIC0gYWJzKGd4MCkgLSBhYnMoZ3kwKTsKICAgIHZlYzQgc3owID0gc3RlcChnejAsIHZlYzQoMC4wKSk7CiAgICBneDAgLT0gc3owICogKHN0ZXAoMC4wLCBneDApIC0gMC41KTsKICAgIGd5MCAtPSBzejAgKiAoc3RlcCgwLjAsIGd5MCkgLSAwLjUpOwoKICAgIHZlYzQgZ3gxID0gaXh5MSAqICgxLjAgLyA3LjApOwogICAgdmVjNCBneTEgPSBmcmFjdChmbG9vcihneDEpICogKDEuMCAvIDcuMCkpIC0gMC41OwogICAgZ3gxID0gZnJhY3QoZ3gxKTsKICAgIHZlYzQgZ3oxID0gdmVjNCgwLjUpIC0gYWJzKGd4MSkgLSBhYnMoZ3kxKTsKICAgIHZlYzQgc3oxID0gc3RlcChnejEsIHZlYzQoMC4wKSk7CiAgICBneDEgLT0gc3oxICogKHN0ZXAoMC4wLCBneDEpIC0gMC41KTsKICAgIGd5MSAtPSBzejEgKiAoc3RlcCgwLjAsIGd5MSkgLSAwLjUpOwoKICAgIHZlYzMgZzAwMCA9IHZlYzMoZ3gwLngsZ3kwLngsZ3owLngpOwogICAgdmVjMyBnMTAwID0gdmVjMyhneDAueSxneTAueSxnejAueSk7CiAgICB2ZWMzIGcwMTAgPSB2ZWMzKGd4MC56LGd5MC56LGd6MC56KTsKICAgIHZlYzMgZzExMCA9IHZlYzMoZ3gwLncsZ3kwLncsZ3owLncpOwogICAgdmVjMyBnMDAxID0gdmVjMyhneDEueCxneTEueCxnejEueCk7CiAgICB2ZWMzIGcxMDEgPSB2ZWMzKGd4MS55LGd5MS55LGd6MS55KTsKICAgIHZlYzMgZzAxMSA9IHZlYzMoZ3gxLnosZ3kxLnosZ3oxLnopOwogICAgdmVjMyBnMTExID0gdmVjMyhneDEudyxneTEudyxnejEudyk7CgogICAgdmVjNCBub3JtMCA9IHRheWxvckludlNxcnQodmVjNChkb3QoZzAwMCwgZzAwMCksIGRvdChnMDEwLCBnMDEwKSwgZG90KGcxMDAsIGcxMDApLCBkb3QoZzExMCwgZzExMCkpKTsKICAgIGcwMDAgKj0gbm9ybTAueDsKICAgIGcwMTAgKj0gbm9ybTAueTsKICAgIGcxMDAgKj0gbm9ybTAuejsKICAgIGcxMTAgKj0gbm9ybTAudzsKICAgIHZlYzQgbm9ybTEgPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KGcwMDEsIGcwMDEpLCBkb3QoZzAxMSwgZzAxMSksIGRvdChnMTAxLCBnMTAxKSwgZG90KGcxMTEsIGcxMTEpKSk7CiAgICBnMDAxICo9IG5vcm0xLng7CiAgICBnMDExICo9IG5vcm0xLnk7CiAgICBnMTAxICo9IG5vcm0xLno7CiAgICBnMTExICo9IG5vcm0xLnc7CgogICAgZmxvYXQgbjAwMCA9IGRvdChnMDAwLCBQZjApOwogICAgZmxvYXQgbjEwMCA9IGRvdChnMTAwLCB2ZWMzKFBmMS54LCBQZjAueXopKTsKICAgIGZsb2F0IG4wMTAgPSBkb3QoZzAxMCwgdmVjMyhQZjAueCwgUGYxLnksIFBmMC56KSk7CiAgICBmbG9hdCBuMTEwID0gZG90KGcxMTAsIHZlYzMoUGYxLnh5LCBQZjAueikpOwogICAgZmxvYXQgbjAwMSA9IGRvdChnMDAxLCB2ZWMzKFBmMC54eSwgUGYxLnopKTsKICAgIGZsb2F0IG4xMDEgPSBkb3QoZzEwMSwgdmVjMyhQZjEueCwgUGYwLnksIFBmMS56KSk7CiAgICBmbG9hdCBuMDExID0gZG90KGcwMTEsIHZlYzMoUGYwLngsIFBmMS55eikpOwogICAgZmxvYXQgbjExMSA9IGRvdChnMTExLCBQZjEpOwoKICAgIHZlYzMgZmFkZV94eXogPSBxdWludGljKFBmMCk7CiAgICB2ZWM0IG5feiA9IG1peCh2ZWM0KG4wMDAsIG4xMDAsIG4wMTAsIG4xMTApLCB2ZWM0KG4wMDEsIG4xMDEsIG4wMTEsIG4xMTEpLCBmYWRlX3h5ei56KTsKICAgIHZlYzIgbl95eiA9IG1peChuX3oueHksIG5fei56dywgZmFkZV94eXoueSk7CiAgICBmbG9hdCBuX3h5eiA9IG1peChuX3l6LngsIG5feXoueSwgZmFkZV94eXoueCk7CiAgICByZXR1cm4gMi4yICogbl94eXo7Cn0KCmZsb2F0IHBub2lzZShpbiB2ZWM0IFAsIGluIHZlYzQgcmVwKSB7CiAgICB2ZWM0IFBpMCA9IG1vZChmbG9vcihQKSwgcmVwKTsgCiAgICB2ZWM0IFBpMSA9IG1vZChQaTAgKyAxLjAsIHJlcCk7IAogICAgUGkwID0gbW9kMjg5KFBpMCk7CiAgICBQaTEgPSBtb2QyODkoUGkxKTsKICAgIHZlYzQgUGYwID0gZnJhY3QoUCk7IAogICAgdmVjNCBQZjEgPSBQZjAgLSAxLjA7IAogICAgdmVjNCBpeCA9IHZlYzQoUGkwLngsIFBpMS54LCBQaTAueCwgUGkxLngpOwogICAgdmVjNCBpeSA9IHZlYzQoUGkwLnl5LCBQaTEueXkpOwogICAgdmVjNCBpejAgPSB2ZWM0KFBpMC56enp6KTsKICAgIHZlYzQgaXoxID0gdmVjNChQaTEuenp6eik7CiAgICB2ZWM0IGl3MCA9IHZlYzQoUGkwLnd3d3cpOwogICAgdmVjNCBpdzEgPSB2ZWM0KFBpMS53d3d3KTsKCiAgICB2ZWM0IGl4eSA9IHBlcm11dGUocGVybXV0ZShpeCkgKyBpeSk7CiAgICB2ZWM0IGl4eTAgPSBwZXJtdXRlKGl4eSArIGl6MCk7CiAgICB2ZWM0IGl4eTEgPSBwZXJtdXRlKGl4eSArIGl6MSk7CiAgICB2ZWM0IGl4eTAwID0gcGVybXV0ZShpeHkwICsgaXcwKTsKICAgIHZlYzQgaXh5MDEgPSBwZXJtdXRlKGl4eTAgKyBpdzEpOwogICAgdmVjNCBpeHkxMCA9IHBlcm11dGUoaXh5MSArIGl3MCk7CiAgICB2ZWM0IGl4eTExID0gcGVybXV0ZShpeHkxICsgaXcxKTsKCiAgICB2ZWM0IGd4MDAgPSBpeHkwMCAqICgxLjAgLyA3LjApOwogICAgdmVjNCBneTAwID0gZmxvb3IoZ3gwMCkgKiAoMS4wIC8gNy4wKTsKICAgIHZlYzQgZ3owMCA9IGZsb29yKGd5MDApICogKDEuMCAvIDYuMCk7CiAgICBneDAwID0gZnJhY3QoZ3gwMCkgLSAwLjU7CiAgICBneTAwID0gZnJhY3QoZ3kwMCkgLSAwLjU7CiAgICBnejAwID0gZnJhY3QoZ3owMCkgLSAwLjU7CiAgICB2ZWM0IGd3MDAgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MDApIC0gYWJzKGd5MDApIC0gYWJzKGd6MDApOwogICAgdmVjNCBzdzAwID0gc3RlcChndzAwLCB2ZWM0KDAuMCkpOwogICAgZ3gwMCAtPSBzdzAwICogKHN0ZXAoMC4wLCBneDAwKSAtIDAuNSk7CiAgICBneTAwIC09IHN3MDAgKiAoc3RlcCgwLjAsIGd5MDApIC0gMC41KTsKCiAgICB2ZWM0IGd4MDEgPSBpeHkwMSAqICgxLjAgLyA3LjApOwogICAgdmVjNCBneTAxID0gZmxvb3IoZ3gwMSkgKiAoMS4wIC8gNy4wKTsKICAgIHZlYzQgZ3owMSA9IGZsb29yKGd5MDEpICogKDEuMCAvIDYuMCk7CiAgICBneDAxID0gZnJhY3QoZ3gwMSkgLSAwLjU7CiAgICBneTAxID0gZnJhY3QoZ3kwMSkgLSAwLjU7CiAgICBnejAxID0gZnJhY3QoZ3owMSkgLSAwLjU7CiAgICB2ZWM0IGd3MDEgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MDEpIC0gYWJzKGd5MDEpIC0gYWJzKGd6MDEpOwogICAgdmVjNCBzdzAxID0gc3RlcChndzAxLCB2ZWM0KDAuMCkpOwogICAgZ3gwMSAtPSBzdzAxICogKHN0ZXAoMC4wLCBneDAxKSAtIDAuNSk7CiAgICBneTAxIC09IHN3MDEgKiAoc3RlcCgwLjAsIGd5MDEpIC0gMC41KTsKCiAgICB2ZWM0IGd4MTAgPSBpeHkxMCAqICgxLjAgLyA3LjApOwogICAgdmVjNCBneTEwID0gZmxvb3IoZ3gxMCkgKiAoMS4wIC8gNy4wKTsKICAgIHZlYzQgZ3oxMCA9IGZsb29yKGd5MTApICogKDEuMCAvIDYuMCk7CiAgICBneDEwID0gZnJhY3QoZ3gxMCkgLSAwLjU7CiAgICBneTEwID0gZnJhY3QoZ3kxMCkgLSAwLjU7CiAgICBnejEwID0gZnJhY3QoZ3oxMCkgLSAwLjU7CiAgICB2ZWM0IGd3MTAgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MTApIC0gYWJzKGd5MTApIC0gYWJzKGd6MTApOwogICAgdmVjNCBzdzEwID0gc3RlcChndzEwLCB2ZWM0KDAuMCkpOwogICAgZ3gxMCAtPSBzdzEwICogKHN0ZXAoMC4wLCBneDEwKSAtIDAuNSk7CiAgICBneTEwIC09IHN3MTAgKiAoc3RlcCgwLjAsIGd5MTApIC0gMC41KTsKCiAgICB2ZWM0IGd4MTEgPSBpeHkxMSAqICgxLjAgLyA3LjApOwogICAgdmVjNCBneTExID0gZmxvb3IoZ3gxMSkgKiAoMS4wIC8gNy4wKTsKICAgIHZlYzQgZ3oxMSA9IGZsb29yKGd5MTEpICogKDEuMCAvIDYuMCk7CiAgICBneDExID0gZnJhY3QoZ3gxMSkgLSAwLjU7CiAgICBneTExID0gZnJhY3QoZ3kxMSkgLSAwLjU7CiAgICBnejExID0gZnJhY3QoZ3oxMSkgLSAwLjU7CiAgICB2ZWM0IGd3MTEgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MTEpIC0gYWJzKGd5MTEpIC0gYWJzKGd6MTEpOwogICAgdmVjNCBzdzExID0gc3RlcChndzExLCB2ZWM0KDAuMCkpOwogICAgZ3gxMSAtPSBzdzExICogKHN0ZXAoMC4wLCBneDExKSAtIDAuNSk7CiAgICBneTExIC09IHN3MTEgKiAoc3RlcCgwLjAsIGd5MTEpIC0gMC41KTsKCiAgICB2ZWM0IGcwMDAwID0gdmVjNChneDAwLngsZ3kwMC54LGd6MDAueCxndzAwLngpOwogICAgdmVjNCBnMTAwMCA9IHZlYzQoZ3gwMC55LGd5MDAueSxnejAwLnksZ3cwMC55KTsKICAgIHZlYzQgZzAxMDAgPSB2ZWM0KGd4MDAueixneTAwLnosZ3owMC56LGd3MDAueik7CiAgICB2ZWM0IGcxMTAwID0gdmVjNChneDAwLncsZ3kwMC53LGd6MDAudyxndzAwLncpOwogICAgdmVjNCBnMDAxMCA9IHZlYzQoZ3gxMC54LGd5MTAueCxnejEwLngsZ3cxMC54KTsKICAgIHZlYzQgZzEwMTAgPSB2ZWM0KGd4MTAueSxneTEwLnksZ3oxMC55LGd3MTAueSk7CiAgICB2ZWM0IGcwMTEwID0gdmVjNChneDEwLnosZ3kxMC56LGd6MTAueixndzEwLnopOwogICAgdmVjNCBnMTExMCA9IHZlYzQoZ3gxMC53LGd5MTAudyxnejEwLncsZ3cxMC53KTsKICAgIHZlYzQgZzAwMDEgPSB2ZWM0KGd4MDEueCxneTAxLngsZ3owMS54LGd3MDEueCk7CiAgICB2ZWM0IGcxMDAxID0gdmVjNChneDAxLnksZ3kwMS55LGd6MDEueSxndzAxLnkpOwogICAgdmVjNCBnMDEwMSA9IHZlYzQoZ3gwMS56LGd5MDEueixnejAxLnosZ3cwMS56KTsKICAgIHZlYzQgZzExMDEgPSB2ZWM0KGd4MDEudyxneTAxLncsZ3owMS53LGd3MDEudyk7CiAgICB2ZWM0IGcwMDExID0gdmVjNChneDExLngsZ3kxMS54LGd6MTEueCxndzExLngpOwogICAgdmVjNCBnMTAxMSA9IHZlYzQoZ3gxMS55LGd5MTEueSxnejExLnksZ3cxMS55KTsKICAgIHZlYzQgZzAxMTEgPSB2ZWM0KGd4MTEueixneTExLnosZ3oxMS56LGd3MTEueik7CiAgICB2ZWM0IGcxMTExID0gdmVjNChneDExLncsZ3kxMS53LGd6MTEudyxndzExLncpOwoKICAgIHZlYzQgbm9ybTAwID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChnMDAwMCwgZzAwMDApLCBkb3QoZzAxMDAsIGcwMTAwKSwgZG90KGcxMDAwLCBnMTAwMCksIGRvdChnMTEwMCwgZzExMDApKSk7CiAgICBnMDAwMCAqPSBub3JtMDAueDsKICAgIGcwMTAwICo9IG5vcm0wMC55OwogICAgZzEwMDAgKj0gbm9ybTAwLno7CiAgICBnMTEwMCAqPSBub3JtMDAudzsKCiAgICB2ZWM0IG5vcm0wMSA9IHRheWxvckludlNxcnQodmVjNChkb3QoZzAwMDEsIGcwMDAxKSwgZG90KGcwMTAxLCBnMDEwMSksIGRvdChnMTAwMSwgZzEwMDEpLCBkb3QoZzExMDEsIGcxMTAxKSkpOwogICAgZzAwMDEgKj0gbm9ybTAxLng7CiAgICBnMDEwMSAqPSBub3JtMDEueTsKICAgIGcxMDAxICo9IG5vcm0wMS56OwogICAgZzExMDEgKj0gbm9ybTAxLnc7CgogICAgdmVjNCBub3JtMTAgPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KGcwMDEwLCBnMDAxMCksIGRvdChnMDExMCwgZzAxMTApLCBkb3QoZzEwMTAsIGcxMDEwKSwgZG90KGcxMTEwLCBnMTExMCkpKTsKICAgIGcwMDEwICo9IG5vcm0xMC54OwogICAgZzAxMTAgKj0gbm9ybTEwLnk7CiAgICBnMTAxMCAqPSBub3JtMTAuejsKICAgIGcxMTEwICo9IG5vcm0xMC53OwoKICAgIHZlYzQgbm9ybTExID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChnMDAxMSwgZzAwMTEpLCBkb3QoZzAxMTEsIGcwMTExKSwgZG90KGcxMDExLCBnMTAxMSksIGRvdChnMTExMSwgZzExMTEpKSk7CiAgICBnMDAxMSAqPSBub3JtMTEueDsKICAgIGcwMTExICo9IG5vcm0xMS55OwogICAgZzEwMTEgKj0gbm9ybTExLno7CiAgICBnMTExMSAqPSBub3JtMTEudzsKCiAgICBmbG9hdCBuMDAwMCA9IGRvdChnMDAwMCwgUGYwKTsKICAgIGZsb2F0IG4xMDAwID0gZG90KGcxMDAwLCB2ZWM0KFBmMS54LCBQZjAueXp3KSk7CiAgICBmbG9hdCBuMDEwMCA9IGRvdChnMDEwMCwgdmVjNChQZjAueCwgUGYxLnksIFBmMC56dykpOwogICAgZmxvYXQgbjExMDAgPSBkb3QoZzExMDAsIHZlYzQoUGYxLnh5LCBQZjAuencpKTsKICAgIGZsb2F0IG4wMDEwID0gZG90KGcwMDEwLCB2ZWM0KFBmMC54eSwgUGYxLnosIFBmMC53KSk7CiAgICBmbG9hdCBuMTAxMCA9IGRvdChnMTAxMCwgdmVjNChQZjEueCwgUGYwLnksIFBmMS56LCBQZjAudykpOwogICAgZmxvYXQgbjAxMTAgPSBkb3QoZzAxMTAsIHZlYzQoUGYwLngsIFBmMS55eiwgUGYwLncpKTsKICAgIGZsb2F0IG4xMTEwID0gZG90KGcxMTEwLCB2ZWM0KFBmMS54eXosIFBmMC53KSk7CiAgICBmbG9hdCBuMDAwMSA9IGRvdChnMDAwMSwgdmVjNChQZjAueHl6LCBQZjEudykpOwogICAgZmxvYXQgbjEwMDEgPSBkb3QoZzEwMDEsIHZlYzQoUGYxLngsIFBmMC55eiwgUGYxLncpKTsKICAgIGZsb2F0IG4wMTAxID0gZG90KGcwMTAxLCB2ZWM0KFBmMC54LCBQZjEueSwgUGYwLnosIFBmMS53KSk7CiAgICBmbG9hdCBuMTEwMSA9IGRvdChnMTEwMSwgdmVjNChQZjEueHksIFBmMC56LCBQZjEudykpOwogICAgZmxvYXQgbjAwMTEgPSBkb3QoZzAwMTEsIHZlYzQoUGYwLnh5LCBQZjEuencpKTsKICAgIGZsb2F0IG4xMDExID0gZG90KGcxMDExLCB2ZWM0KFBmMS54LCBQZjAueSwgUGYxLnp3KSk7CiAgICBmbG9hdCBuMDExMSA9IGRvdChnMDExMSwgdmVjNChQZjAueCwgUGYxLnl6dykpOwogICAgZmxvYXQgbjExMTEgPSBkb3QoZzExMTEsIFBmMSk7CgogICAgdmVjNCBmYWRlX3h5encgPSBxdWludGljKFBmMCk7CiAgICB2ZWM0IG5fMHcgPSBtaXgodmVjNChuMDAwMCwgbjEwMDAsIG4wMTAwLCBuMTEwMCksIHZlYzQobjAwMDEsIG4xMDAxLCBuMDEwMSwgbjExMDEpLCBmYWRlX3h5encudyk7CiAgICB2ZWM0IG5fMXcgPSBtaXgodmVjNChuMDAxMCwgbjEwMTAsIG4wMTEwLCBuMTExMCksIHZlYzQobjAwMTEsIG4xMDExLCBuMDExMSwgbjExMTEpLCBmYWRlX3h5encudyk7CiAgICB2ZWM0IG5fencgPSBtaXgobl8wdywgbl8xdywgZmFkZV94eXp3LnopOwogICAgdmVjMiBuX3l6dyA9IG1peChuX3p3Lnh5LCBuX3p3Lnp3LCBmYWRlX3h5encueSk7CiAgICBmbG9hdCBuX3h5encgPSBtaXgobl95encueCwgbl95encueSwgZmFkZV94eXp3LngpOwogICAgcmV0dXJuIDIuMiAqIG5feHl6dzsKfQojZW5kaWYKCgoKCgoKI2lmbmRlZiBTUkdCX0VQU0lMT04gCiNkZWZpbmUgU1JHQl9FUFNJTE9OIDAuMDAwMDAwMDEKI2VuZGlmCgojaWZuZGVmIEZOQ19TUkdCMlJHQgojZGVmaW5lIEZOQ19TUkdCMlJHQgoKCgoKZmxvYXQgc3JnYjJyZ2IoZmxvYXQgY2hhbm5lbCkgewogICAgcmV0dXJuIChjaGFubmVsIDwgMC4wNDA0NSkgPyBjaGFubmVsICogMC4wNzczOTkzODA4IDogcG93KChjaGFubmVsICsgMC4wNTUpICogMC45NDc4NjcyOTg1NzgxOTksIDIuNCk7Cn0KCnZlYzMgc3JnYjJyZ2IodmVjMyBzcmdiKSB7CiAgICByZXR1cm4gdmVjMyhzcmdiMnJnYihzcmdiLnIgKyBTUkdCX0VQU0lMT04pLCAKICAgICAgICAgICAgICAgIHNyZ2IycmdiKHNyZ2IuZyArIFNSR0JfRVBTSUxPTiksICAgICAgICAgICAgICAgICBzcmdiMnJnYihzcmdiLmIgKyBTUkdCX0VQU0lMT04pKTsKfQoKdmVjNCBzcmdiMnJnYih2ZWM0IHNyZ2IpIHsKICAgIHJldHVybiB2ZWM0KHNyZ2IycmdiKHNyZ2IucmdiKSwgc3JnYi5hKTsKfQoKI2VuZGlmCgoKI2lmICFkZWZpbmVkKEZOQ19TQVRVUkFURSkgJiYgIWRlZmluZWQoc2F0dXJhdGUpCiNkZWZpbmUgRk5DX1NBVFVSQVRFCiNkZWZpbmUgc2F0dXJhdGUoeCkgY2xhbXAoeCwgMC4wLCAxLjApCiNlbmRpZgoKCgojaWZuZGVmIFNSR0JfRVBTSUxPTiAKI2RlZmluZSBTUkdCX0VQU0lMT04gMC4wMDAwMDAwMQojZW5kaWYKCiNpZm5kZWYgRk5DX1JHQjJTUkdCCiNkZWZpbmUgRk5DX1JHQjJTUkdCCgoKZmxvYXQgcmdiMnNyZ2IoZmxvYXQgY2hhbm5lbCkgewogICAgcmV0dXJuIChjaGFubmVsIDwgMC4wMDMxMzA4KSA/IGNoYW5uZWwgKiAxMi45MiA6IDEuMDU1ICogcG93KGNoYW5uZWwsIDAuNDE2NjY2NjY2NjY2NjY2NykgLSAwLjA1NTsKfQoKdmVjMyByZ2Iyc3JnYih2ZWMzIHJnYikgewogICAgcmV0dXJuIHNhdHVyYXRlKHZlYzMocmdiMnNyZ2IocmdiLnIgLSBTUkdCX0VQU0lMT04pLCByZ2Iyc3JnYihyZ2IuZyAtIFNSR0JfRVBTSUxPTiksIHJnYjJzcmdiKHJnYi5iIC0gU1JHQl9FUFNJTE9OKSkpOwp9Cgp2ZWM0IHJnYjJzcmdiKHZlYzQgcmdiKSB7CiAgICByZXR1cm4gdmVjNChyZ2Iyc3JnYihyZ2IucmdiKSwgcmdiLmEpOwp9CgojZW5kaWYKCgoKI2lmbmRlZiBGTkNfTUlYT0tMQUIKI2RlZmluZSBGTkNfTUlYT0tMQUIKdmVjMyBtaXhPa2xhYiggdmVjMyBjb2xBLCB2ZWMzIGNvbEIsIGZsb2F0IGggKSB7CgogICAgI2lmZGVmIE1JWE9LTEFCX0NPTE9SU1BBQ0VfU1JHQgogICAgY29sQSA9IHNyZ2IycmdiKGNvbEEpOwogICAgY29sQiA9IHNyZ2IycmdiKGNvbEIpOwogICAgI2VuZGlmCgogICAgCiAgICBjb25zdCBtYXQzIGtDT05FdG9MTVMgPSBtYXQzKCAgICAgICAgICAgICAgICAKICAgICAgICAgMC40MTIxNjU2MTIwLCAgMC4yMTE4NTkxMDcwLCAgMC4wODgzMDk3OTQ3LAogICAgICAgICAwLjUzNjI3NTIwODAsICAwLjY4MDcxODk1ODQsICAwLjI4MTg0NzQxNzQsCiAgICAgICAgIDAuMDUxNDU3NTY1MywgIDAuMTA3NDA2NTc5MCwgIDAuNjMwMjYxMzYxNik7CiAgICBjb25zdCBtYXQzIGtMTVN0b0NPTkUgPSBtYXQzKAogICAgICAgICA0LjA3NjcyNDUyOTMsIC0xLjI2ODE0Mzc3MzEsIC0wLjAwNDExMTk4ODUsCiAgICAgICAgLTMuMzA3MjE2ODgyNywgIDIuNjA5MzMyMzIzMSwgLTAuNzAzNDc2MzA5OCwKICAgICAgICAgMC4yMzA3NTkwNTQ0LCAtMC4zNDExMzQ0MjkwLCAgMS43MDY4NjI1Njg5KTsKICAgICAgICAgICAgICAgICAgICAKICAgIAogICAgdmVjMyBsbXNBID0gcG93KCBrQ09ORXRvTE1TICogY29sQSwgdmVjMygxLjAvMy4wKSApOwogICAgdmVjMyBsbXNCID0gcG93KCBrQ09ORXRvTE1TICogY29sQiwgdmVjMygxLjAvMy4wKSApOwogICAgCiAgICB2ZWMzIGxtcyA9IG1peCggbG1zQSwgbG1zQiwgaCApOwogICAgCiAgICAKICAgIHZlYzMgcmdiID0ga0xNU3RvQ09ORSoobG1zKmxtcypsbXMpOwoKICAgICNpZmRlZiBNSVhPS0xBQl9DT0xPUlNQQUNFX1NSR0IKICAgIHJldHVybiByZ2Iyc3JnYihyZ2IpOwogICAgI2Vsc2UKICAgIHJldHVybiByZ2I7CiAgICAjZW5kaWYKfQoKdmVjNCBtaXhPa2xhYiggdmVjNCBjb2xBLCB2ZWM0IGNvbEIsIGZsb2F0IGggKSB7CiAgICByZXR1cm4gdmVjNCggbWl4T2tsYWIoY29sQS5yZ2IsIGNvbEIucmdiLCBoKSwgbWl4KGNvbEEuYSwgY29sQi5hLCBoKSApOwp9CiNlbmRpZgoKICAgIAoKZmxvYXQgcmF5U3RyZW5ndGgodmVjMiByYXlTb3VyY2UsIHZlYzIgcmF5UmVmRGlyZWN0aW9uLCB2ZWMyIGNvb3JkLCBmbG9hdCBzZWVkQSwgZmxvYXQgc2VlZEIsIGZsb2F0IHNwZWVkKQoKewoKCXZlYzIgc291cmNlVG9Db29yZCA9IGNvb3JkIC0gcmF5U291cmNlOwoKCWZsb2F0IGNvc0FuZ2xlID0gZG90KG5vcm1hbGl6ZShzb3VyY2VUb0Nvb3JkKSwgcmF5UmVmRGlyZWN0aW9uKTsKCgkKCglyZXR1cm4gY2xhbXAoCgoJCSguNDUgKyAwLjE1ICogc2luKGNvc0FuZ2xlICogc2VlZEEgKyB1X3RpbWUgKiBzcGVlZCkpICsKCgkJKDAuMyArIDAuMiAqIGNvcygtY29zQW5nbGUgKiBzZWVkQiArIHVfdGltZSAqIHNwZWVkKSksCgoJCXVfcmVhY2gsIDEuMCkgKgoKCQljbGFtcCgodV9yZXNvbHV0aW9uLnggLSBsZW5ndGgoc291cmNlVG9Db29yZCkpIC8gdV9yZXNvbHV0aW9uLngsIHVfcmVhY2gsIDEuMCk7Cgp9CgoKCnZvaWQgbWFpbigpCgp7CgoJdmVjMiB1diA9IGdsX0ZyYWdDb29yZC54eSAvIHVfcmVzb2x1dGlvbi54eTsKCgl1di55ID0gMS4wIC0gdXYueTsKCgl2ZWMyIGNvb3JkID0gdmVjMihnbF9GcmFnQ29vcmQueCwgdV9yZXNvbHV0aW9uLnkgLSBnbF9GcmFnQ29vcmQueSk7CgoJZmxvYXQgc3BlZWQgPSB1X3JheXMgKiAxMC4wOwoKCQoKCS8vIFNldCB0aGUgcGFyYW1ldGVycyBvZiB0aGUgc3VuIHJheXMKCgl2ZWMyIHJheVBvczEgPSB2ZWMyKHVfcmVzb2x1dGlvbi54ICogMC43LCB1X3Jlc29sdXRpb24ueSAqIC0wLjQpOwoKCXZlYzIgcmF5UmVmRGlyMSA9IG5vcm1hbGl6ZSh2ZWMyKDEuMCwgLTAuMTE2KSk7CgoJZmxvYXQgcmF5U2VlZEExID0gMzYuMjIxNCpzcGVlZDsKCglmbG9hdCByYXlTZWVkQjEgPSAyMS4xMTM0OSpzcGVlZDsKCglmbG9hdCByYXlTcGVlZDEgPSAxLjUqc3BlZWQ7CgoJCgoJdmVjMiByYXlQb3MyID0gdmVjMih1X3Jlc29sdXRpb24ueCAqIDAuOCwgdV9yZXNvbHV0aW9uLnkgKiAtMC42KTsKCgl2ZWMyIHJheVJlZkRpcjIgPSBub3JtYWxpemUodmVjMigxLjAsIDAuMjQxKSk7CgoJZmxvYXQgcmF5U2VlZEEyID0gMjIuMzk5MTAqc3BlZWQ7CgoJZmxvYXQgcmF5U2VlZEIyID0gMTguMDIzNCpzcGVlZDsKCglmbG9hdCByYXlTcGVlZDIgPSAxLjEqc3BlZWQ7CgoJCgoJLy8gQ2FsY3VsYXRlIHRoZSBjb2xvdXIgb2YgdGhlIHN1biByYXlzIG9uIHRoZSBjdXJyZW50IGZyYWdtZW50CgoJdmVjNCByYXlzMSA9CgoJCXZlYzQoMC4sMC4sMC4sIC4wKSArCgoJCXJheVN0cmVuZ3RoKHJheVBvczEsIHJheVJlZkRpcjEsIGNvb3JkLCByYXlTZWVkQTEsIHJheVNlZWRCMSwgcmF5U3BlZWQxKSAqIHVfY29sb3JzWzBdOwoKCSAKCgl2ZWM0IHJheXMyID0KCgkJdmVjNCgwLiwwLiwwLiwgLjApICsKCgkJcmF5U3RyZW5ndGgocmF5UG9zMiwgcmF5UmVmRGlyMiwgY29vcmQsIHJheVNlZWRBMiwgcmF5U2VlZEIyLCByYXlTcGVlZDIpICogdV9jb2xvcnNbMV07CgoJCgoJdmVjNCBmcmFnQ29sb3IgPSAocmF5czEpICsgKHJheXMyKTsKCgkKCgkvLyBBdHRlbnVhdGUgYnJpZ2h0bmVzcyB0b3dhcmRzIHRoZSBib3R0b20sIHNpbXVsYXRpbmcgbGlnaHQtbG9zcyBkdWUgdG8gZGVwdGguCgoJZmxvYXQgYnJpZ2h0bmVzcyA9IDEuMCp1X3JlYWNoIC0gKGNvb3JkLnkgLyB1X3Jlc29sdXRpb24ueSk7CgoJZnJhZ0NvbG9yICo9IChicmlnaHRuZXNzICsgKDAuNSsgdV9pbnRlbnNpdHkpKTsKCgkvL2ZyYWdDb2xvciA9IHBvdyhmcmFnQ29sb3IsdV9icmlnaHRuZXNzKjEwLjApOwoKCWdsX0ZyYWdDb2xvciA9IGZyYWdDb2xvcjsKCn0KCgoKYCwKICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYC8vIFZlcnRleCBzaGFkZXIKCnZvaWQgbWFpbigpIHsKICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApOwp9YCwKICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7dV9jb2xvcnM6IHt2YWx1ZTogW25ldyBUSFJFRS5WZWN0b3I0KDAuMjQzMTM3MjU0OTAxOTYwNzgsMC40NTg4MjM1Mjk0MTE3NjQ3LDEsMSksbmV3IFRIUkVFLlZlY3RvcjQoMCwwLjIzOTIxNTY4NjI3NDUwOTgxLDAuODQ3MDU4ODIzNTI5NDExOCwxKV19LHVfaW50ZW5zaXR5OiB7dmFsdWU6IDAuOTQ2fSx1X3JheXM6IHt2YWx1ZTogMC4wOTR9LHVfcmVhY2g6IHt2YWx1ZTogMC4yMTF9LHVfdGltZToge3ZhbHVlOiAwfSx1X21vdXNlOiB7dmFsdWU6IFswLDBdfSx1X3Jlc29sdXRpb246IHt2YWx1ZTogWzI0MCw1ODBdfX0sCiAgICAgICAgICAgICAgICB3aXJlZnJhbWU6IGZhbHNlLCAKICAgICAgICAgICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMCwKICAgICAgICAgICAgICAgIGRpdGhlcmluZzogZmFsc2UsCiAgICAgICAgICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSwKICAgICAgICAgICAgICAgIGRvdWJsZVNpZGVkOiB0cnVlLAogICAgICAgICAgICAgICAgZ2xzbFZlcnNpb246ICIxMDAiCiAgICAgICAgICAgIH0pCiAgICAgICAgKTsgIAogICAgfQoKICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KENhbnZhcyx7CiAgICAgICAgICAgIGdsOiB7CiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsCiAgICAgICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLAogICAgICAgICAgICAgICAgYWxwaGE6IHRydWUsCiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSwKICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSwKICAgICAgICAgICAgICAgIHByZWNpc2lvbjogImhpZ2hwIiwKICAgICAgICAgICAgICAgIHBvd2VyUHJlZmVyZW5jZTogImhpZ2gtcGVyZm9ybWFuY2UiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHJlc2l6ZTp7CiAgICAgICAgICAgICAgICBkZWJvdW5jZTogMCwKICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsCiAgICAgICAgICAgICAgICBvZmZzZXRTaXplOiB0cnVlCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGRwcjogMSwKICAgICAgICAgICAgY2FtZXJhOiB7CiAgICAgICAgICAgICAgICBmb3Y6IDc1LAogICAgICAgICAgICAgICAgbmVhcjogMC4xLAogICAgICAgICAgICAgICAgZmFyOiAxMDAwLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsNV0KICAgICAgICAgICAgfSwKICAgICAgICAgICAgc3R5bGU6eyBoZWlnaHQ6ICIxMDAlIiwgd2lkdGg6ICIxMDAlIiB9CiAgICAgICAgfSwKICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHR1cmVNZXNoKSAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgKSwgZW1iZWRSb290KTsKPC9zY3JpcHQ+CiAgICAgICAgPC9oZWFkPgogICAgICAgIDxib2R5Pgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYm9vay41ZmIxMWI4ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvbHlnaWEuZjc0OTA1OTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL292ZXJmbG93LjhkNTA0MTVkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy90cmFzaC41MjRkYmNkMy5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvdmVydGljYWwuOTA2MTA4NDkuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2hvcml6b250YWwuNDRmNzcxZjguc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2FkZC5hNTUyNDBkZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvc2lnLjg1MGE4NWU3LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9taW51cy4xZTFhMGFiZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvZWZmZWN0LjQ1NTcyNDNmLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy92aXNpYmxlLmM2ZDRlMWMwLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9oaWRkZW4uNWE0ZmMyNTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3dvcmtlci5iNzYxZmIxMS5qcyAtLT4KPC9ib2R5PgogICAgICAgIDwvaHRtbD4="
          className="w-full border-0 m-0 h-[10%] md:opacity-60 lg:h-[20%] object-cover right-0    absolute z-20 max-h-[50rem]"
        />
        <NavBar />
        <main className="overflow-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
