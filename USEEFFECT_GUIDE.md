# Panduan Penggunaan useEffect

## 🎯 Kapan Menggunakan useEffect?

### 1. **Ketika Komponen Baru Ditampilkan (Mount)**
- Load data dari API
- Setup subscription/event listener
- Inisialisasi timer
- Mengambil data dari localStorage

### 2. **Ketika State/Props Berubah**
- Update DOM berdasarkan perubahan data
- Sync data ke server/API
- Memanggil API saat search term berubah

### 3. **Cleanup (Ketika Komponen Dihapus)**
- Remove event listener
- Clear timer/interval
- Cancel API request
- Close connection

## 📝 Struktur Dasar useEffect

```javascript
useEffect(() => {
  // Kode yang dijalankan
  
  // Optional: Cleanup function
  return () => {
    // Cleanup code
  }
}, [dependencies]) // Dependency array
```

## 🔍 Contoh Penggunaan di Aplikasi Absensi

### Contoh 1: Load Data dari LocalStorage Saat Mount

```javascript
export default function App() {
  const [absensis, setAbsensis] = useState([])

  // ✅ BENAR: useEffect di top-level komponen
  useEffect(() => {
    // Load data dari localStorage saat komponen pertama kali render
    const savedAbsensis = localStorage.getItem('absensis')
    if (savedAbsensis) {
      setAbsensis(JSON.parse(savedAbsensis))
    }
  }, []) // [] = hanya jalankan sekali saat mount

  return (
    // ...
  )
}
```

### Contoh 2: Simpan ke LocalStorage Setiap Kali absensis Berubah

```javascript
export default function App() {
  const [absensis, setAbsensis] = useState([])

  // ✅ BENAR: Simpan ke localStorage setiap kali absensis berubah
  useEffect(() => {
    localStorage.setItem('absensis', JSON.stringify(absensis))
  }, [absensis]) // Jalankan setiap kali absensis berubah

  return (
    // ...
  )
}
```

### Contoh 3: Alert Setelah Absensi Ditambahkan

```javascript
export default function App() {
  const [absensis, setAbsensis] = useState([])
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  // ✅ BENAR: Monitor perubahan absensis untuk alert
  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => {
        alert("Absensi success to list")
        setShowSuccessAlert(false)
      }, 1000)
      
      // Cleanup: clear timer jika komponen unmount
      return () => clearTimeout(timer)
    }
  }, [showSuccessAlert])

  const addAbsensi = () => {
    // ... tambah absensi ...
    setShowSuccessAlert(true) // Trigger useEffect
  }

  return (
    // ...
  )
}
```

### Contoh 4: Fetch Data dari API Saat Komponen Mount

```javascript
export default function App() {
  const [absensis, setAbsensis] = useState([])
  const [loading, setLoading] = useState(true)

  // ✅ BENAR: Fetch data dari API saat mount
  useEffect(() => {
    const fetchAbsensis = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/absensis')
        const data = await response.json()
        setAbsensis(data)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAbsensis()
  }, []) // Hanya sekali saat mount

  if (loading) return <div>Loading...</div>

  return (
    // ...
  )
}
```

### Contoh 5: Cleanup Event Listener

```javascript
export default function App() {
  // ✅ BENAR: Setup dan cleanup event listener
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        // Reset form
        setName("")
        setStatus("")
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    // Cleanup: remove listener saat unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    // ...
  )
}
```

## ❌ Kesalahan Umum

### 1. ❌ Memanggil useEffect di dalam fungsi biasa
```javascript
// ❌ SALAH!
const addAbsensi = () => {
  useEffect(() => {  // ERROR!
    // ...
  }, [])
}
```

### 2. ❌ Lupa dependency array
```javascript
// ❌ SALAH! Akan loop terus menerus
useEffect(() => {
  setAbsensis([...absensis, newItem])
}) // Tidak ada dependency array = infinite loop!
```

### 3. ❌ Dependency array tidak lengkap
```javascript
// ❌ SALAH! Lupa menambahkan absensis ke dependency
useEffect(() => {
  console.log('Total:', absensis.length)
}, []) // Harus: [absensis]
```

## ✅ Rules of Hooks

1. **Hanya panggil hooks di top-level** (bukan di dalam loop, condition, atau nested function)
2. **Hanya panggil hooks dari function component** (bukan dari regular function)
3. **Dependency array harus lengkap** (semua state/props yang digunakan)

## 🎓 Kesimpulan

**Gunakan useEffect untuk:**
- ✅ Side effects (API calls, localStorage, subscriptions)
- ✅ Setup dan cleanup
- ✅ Monitoring perubahan state/props

**JANGAN gunakan useEffect untuk:**
- ❌ Event handler langsung (pakai fungsi biasa)
- ❌ Perhitungan sederhana (pakai useMemo)
- ❌ Transform data (lakukan langsung di render)


